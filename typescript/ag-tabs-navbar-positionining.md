### Angular Tab Group Bottom
To place the tab bar at the bottom in an Angular Material mat-tab-group, you can use the headerPosition attribute and set it to below. Here's how you can implement it:

```angular2html
<mat-tab-group headerPosition="below">
  <mat-tab label="First">Content 1</mat-tab>
  <mat-tab label="Second">Content 2</mat-tab>
</mat-tab-group>

```
This will position the tab headers below the content area. Additionally, you may need to apply some custom CSS to ensure the layout looks as expected. For example:

```css
.mat-tab-header {
position: absolute;
bottom: 0;
width: 100%;
}
```

This CSS ensures that the tab headers are positioned at the bottom of the tab group container.
