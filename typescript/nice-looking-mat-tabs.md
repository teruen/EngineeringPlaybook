Some material tabs I was very happy with! Add a border matching the primary color around the content pane below it with rounded corners.

### Tab SCSS
```scss
:host ::ng-deep .mdc-tab.mdc-tab:not(.mdc-tab--active) {
//  /* Change background color of all tabs except active tab*/
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#052461+0,267aad+49,b2b2b2+100 */
background: radial-gradient(ellipse at center,  rgba(5,36,97,1) 0%,rgba(38,122,173,1) 49%,rgba(178,178,178,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
background-size: 100% 100%;
transition: background-size 0.4s ease-in-out;
}

:host ::ng-deep .mdc-tab.mdc-tab:hover {
background-size: 150% 150%; /* Expands the gradient smoothly */
box-shadow: 0 0 10px rgba(38, 122, 173, 0.6); /* Subtle glow */
}

:host ::ng-deep .mdc-tab.mdc-tab::before {
left: 3px;
border:  #757575 1px solid;
transform: translateX(-50%) translateY(-50%);
}
:host ::ng-deep .mdc-tab.mdc-tab::after {
right: 3px;
border: #757575 1px solid;
transform: translateX(50%) translateY(-50%);
}

.mat-mdc-tab-group {
border-bottom: none !important; /* Remove bottom border of tabs */
}

.mat-mdc-tab-header {
border-bottom: none !important; /* Ensures no border under the tab header */
}

:host ::ng-deep .mat-mdc-tab-group, .mat-mdc-tab-nav-bar {
/* Change the text color of the tabs -- there are many states */
--mat-tab-header-active-focus-label-text-color: white;
--mat-tab-header-active-label-text-color: white;
--mat-tab-header-inactive-label-text-color: white;
--mat-tab-header-inactive-focus-label-text-color: white;
--mat-tab-header-inactive-hover-label-text-color: white;
--mdc-tab-indicator-active-indicator-color: white;
--mat-tab-header-active-hover-label-text-color: white;
--mat-tab-header-active-ripple-color: white;
--mat-tab-header-inactive-ripple-color: white;
}

:host ::ng-deep .mdc-tab-indicator__content {
/* Remove the the bar underneath the ACTIVE tab */
display: none;
}

:host ::ng-deep .mdc-tab {
/* label style */
color: white;
width: 190px !important;
height: 40px !important;
gap: 10px;

font-family: 'Lato', serif;
font-style: normal;
font-weight: bold;
font-size: 14px;
margin: 2px 8px 0 0;

//border-radius: 20px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
//border: 2px solid #3296e1;
background: transparent;

}

:host ::ng-deep .mat-mdc-tab-header {
/* Background for tab bar */
//background-color: #2a2a72;
}

:host ::ng-deep .mdc-tab--active {
/* Base styling */
box-sizing: border-box;
position: relative; /* Required for ::after positioning */
background: radial-gradient(ellipse at center, rgba(38,122,173,1) 0%, rgba(5,36,97,1) 100%);
overflow: hidden; /* Ensures the effect stays within the tab */
}

:host ::ng-deep .mdc-tab--active::after {
content: "";
position: absolute;
inset: 0;
background: radial-gradient(ellipse at center, rgba(38,122,173,1) 0%, rgba(5,36,97,1) 100%);
opacity: 0; /* Initially hidden */
transition: opacity 1.2s ease-in-out;
}

:host ::ng-deep .mdc-tab--active:hover::after {
opacity: 1; /* Fades in the active tab’s gradient smoothly */
}

:host ::ng-deep .mat-mdc-tab-labels {
margin-top: -1px;
}
:host ::ng-deep .mdc-tab--active:hover {
box-shadow: 0 0 10px rgba(38, 122, 173, 0.6); /* Subtle glow */
}
```

### Content Pane
```html
<div class="p-[20px] bg-white  border-quaternary border-[3px] rounded-lg rounded-tl-none">
<div>
```
