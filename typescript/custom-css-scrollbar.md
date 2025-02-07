Adding this css class to a text area provides a much more modern and minimal scrollbar that you can theme to match your app.

Still haven't figured how to add it to an ag-grid yet.

Found it here: https://codepen.io/GhostRider/pen/oNvoNv

``` css
.scrollbar-min::-webkit-scrollbar-track
{
border-radius: 20px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
background-color: #F5F5F5;
}

.scrollbar-min::-webkit-scrollbar
{
width: 10px;
background-color: #F5F5F5;
}

.scrollbar-min::-webkit-scrollbar-thumb
{
border-radius: 20px;
background-color: #888888;
}
```