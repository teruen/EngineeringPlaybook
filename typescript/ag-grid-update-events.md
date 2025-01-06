
### `onRowDataUpdated` (For Data Changes Only)
<li>Best for: When you need to react specifically to data changes (new data loaded, data replaced).
<li>Does NOT trigger for: Sorting, filtering, or pagination alone.

#### Example Use Case: Updating a label for the number of total rows when the dataset changes.

```typescript
public onRowDataUpdated(): void {
    this.numberOfMatchesLabel = this.gridApi.getDisplayedRowCount();
    console.log('Row data updated. Current visible rows:', this.numberOfMatchesLabel);
}
```


### `onModelUpdated` (For UI and Data Changes)
<li>Best for: When you need to track all grid changes, including filtering, sorting, and pagination.
<li>Triggers: Even when rows are hidden due to filtering, pagination, or sort order changes.

#### Example Use Case: Counting the visible rows after applying a filter.

```typescript
public onModelUpdated(): void {
    this.numberOfMatchesLabel = this.gridApi.getDisplayedRowCount();
    console.log('Model updated. Current visible rows:', this.numberOfMatchesLabel);
}
```

### ✅ Use Cases Compared:

| **Scenario**                            | **Use `onRowDataUpdated`?** | **Use `onModelUpdated`?** |
|----------------------------------------|:--------------------------:|:-------------------------:|
| Loading new data from a REST API       | ✅                      |           ✅            |
| Sorting a column (without data change) | ❌                      |           ✅            |
| Filtering rows                         | ❌                      |            ✅              |
| Changing pages (pagination)            | ❌                      |             ✅             |
| Updating a single row programmatically | ✅                      |             ✅            |
| Initial grid load (first render)       | ✅                      |             ✅            |

---

### ✅ Best Practice Summary:
- **Use `onRowDataUpdated`** when you need to react specifically to **data updates only**.
- **Use `onModelUpdated`** when you need to react to **UI changes** like filtering, sorting, and pagination.
- If you need both, consider combining them selectively for performance optimization.  
