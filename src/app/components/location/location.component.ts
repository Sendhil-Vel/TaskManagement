/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is for displaying users current location in google map. 
*/
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
	lat: any;
	lng: any;
	constructor(private route: ActivatedRoute, private router: Router) { 
		/*
			Sendhil : 25 Sept 2018 : Demo Task management code
			Once user allows the location requests in browser, will fetch lat and lng and display location in google map 
		*/
		if (navigator)
	    {
	        navigator.geolocation.getCurrentPosition( pos => {
			console.log(pos.coords.longitude + " : " + pos.coords.latitude);	
	        this.lng = +pos.coords.longitude;
	        this.lat = +pos.coords.latitude;
	      });
	    }
	}

	ngOnInit() {
	}

}
