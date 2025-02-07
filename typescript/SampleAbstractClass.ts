import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, Subject, Subscription, switchMap} from "rxjs";
import {PreferenceService} from "../services/preference.service";
import {ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {GetOnePreferenceDTO} from "../models/preferences/get-one-preference-dto";
import {Constants} from "../utilities/constants";

@Component({
    selector: 'app-save-grid-preferences',
})
export abstract class SaveGridPreferencesComponent implements OnInit, OnDestroy{
    /**
     * Defines the unique page name associated with this grid. Must be provided by the child class.
     */
    public readonly abstract PAGE_NAME: string;

    /**
     * Flag to start listening for changes
     */
    public listenForGridChanges: boolean = false;

    /**
     * Specifies the grid options configuration. Must be implemented by subclasses.
     * Make sure the following are added:
     *
     *     onSortChanged: () => {
     *       this.saveColumnState();
     *     },
     *     onDragStopped: () => {
     *       this.saveColumnState();
     *     },
     *     onDisplayedColumnsChanged: () => {
     *       this.saveColumnState();
     *     },
     *     onColumnVisible: () => {
     *       this.saveColumnState();
     *     },
     *     onColumnPinned: () => {
     *       this.saveColumnState();
     *     }
     *
     */
    public abstract gridOptions: GridOptions;

    /**
     * Defines the column definitions for the grid. Must be specified by the child class.
     */
    public abstract columnDefs: ColDef[];

    /**
     * Specifies the default column definition, used for all columns unless overridden.
     */
    public abstract defaultColumnDef: ColDef;

    /**
     * Holds the Grid API instance for interacting with the grid programmatically.
     */
    public gridApi: GridApi;

    /**
     * Stores the Column API instance to manipulate column configurations.
     */
    public gridColumnApi: ColumnApi;

    private saveGridColumnStateEventsSubject: Subject<any> = new Subject();
    private saveGridEventsSubscription: Subscription;

    protected constructor(protected preferenceService: PreferenceService){
    }

    /**
     * Subscribe to the SaveGridEventsSubject. Calls ngOnInitImpl to implement any initial logic from child class.
     */
    public ngOnInit() {
        this.saveGridEventsSubscription = this.saveGridColumnStateEventsSubject.asObservable().pipe(
            debounceTime(250),       // Wait 250 msecs before invoking REST call
            switchMap((aNewColumnState: any) => {
                return this.preferenceService.setPreferenceValueForPageUsingJson(Constants.COLUMN_STATE_PREFERENCE_NAME, aNewColumnState, this.PAGE_NAME);
            })
        ).subscribe();
        this.ngOnInitImpl();
    }

    /**
     * Hook for ngOnInit. Use this in place of ngOnInit as it is already established in the base class.
     */
    public abstract ngOnInitImpl(): void;

    /**
     * Unsubscribe from the saveGridEventsSubscription. Calls ngOnDestroyImpl to implement any final logic from child class.
     */
    public ngOnDestroy() {
        if (this.saveGridEventsSubscription) {
            this.saveGridEventsSubscription.unsubscribe();
        }
        this.ngOnDestroyImpl();
    }

    /**
     * Hook for ngOnDestroy. Use this in place of ngOnDestroy as it is already established in the base class.
     */
    public abstract ngOnDestroyImpl(): void;

    /**
     * Method called by ag-grid to setup API, get any preferences for the grid that the user has defined, and calls the
     * abstract reloadGrid method which the user will use to set the data for the grid.
     * @param aParams
     */
    public onGridReady(aParams: GridReadyEvent): void {
        this.gridApi = aParams.api;
        this.gridColumnApi = aParams.columnApi;

        this.gridApi.showLoadingOverlay();

        this.preferenceService.getPreferenceValueForPage(Constants.COLUMN_STATE_PREFERENCE_NAME, this.PAGE_NAME).subscribe((aPreference: GetOnePreferenceDTO) => {
            if (aPreference.value != null) {
                let storedColumnStateObject = JSON.parse(aPreference.value);
                this.gridColumnApi.applyColumnState({
                    applyOrder: true,
                    state: storedColumnStateObject
                });
            }

            // Load the data
            this.reloadGrid();

            // Start listening for column state changes
            this.firstDataRendered();
        });
    }

    /**
     * This method is used to load or update the data in the grid. Use it to subscribe to observables or whatever you're
     * pulling your data from.
     */
    public abstract reloadGrid(): void;

    /**
     * Called once the data has been rendered for the first time. Allows saveColumnState() to start saving the user
     * preferences
     */
    public firstDataRendered(): void {
        this.listenForGridChanges = true;
    }

    /**
     * If listenForGridChanges is true, then any update the user's grid preferences
     * @protected
     */
    protected saveColumnState(): void {
        if (this.listenForGridChanges) {
            let currentColumnState = this.gridColumnApi.getColumnState();
            this.saveGridColumnStateEventsSubject.next(currentColumnState)
        }
    }

}
