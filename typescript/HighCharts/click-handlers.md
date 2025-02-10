Add a click handler to a *POINT*
--------------------------------

 	series: [
  	   {
	    	name: "Browsers",
    		colorByPoint: true,
    		data: [],

    		point: {
      			events:{
        				click: (event: any) => {
          					this.logPointInfo(event)
        				}
      			}
    		}

  	   }
	],



Add a click handler for an *AREA* beneath it

        plotOptions: {
                area: {
                    ...
                    
                           trackByArea: true,
                            events: {
                              click: (event: any) => {
                                this.logPointInfo(event)
                              }
                            }                 
                }
            }



          private logPointInfo(event: any): void {
            console.log('event.point.x=', event.point.x, '   event.point.y=', event.point.y, '   event=', event);
          }
