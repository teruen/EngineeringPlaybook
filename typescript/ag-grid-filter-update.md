```typescript
  public gridOptions: GridOptions = {
    domLayout: 'normal',
    debug: false,
    rowModelType: 'clientSide',
    rowSelection: 'multiple',
    suppressCellFocus: true,
    onRowDataUpdated: () => {
      this.updateNumberOfMatchesLabel()  // This event will trigger only on initial grid load and when rowData is either updated or replaced
    },
    onFilterChanged: () => {
      this.updateNumberOfMatchesLabel()  // The quick filter box and column filters will trigger this event
    },
  };
```
