/*
  Sendhil : 25 Sept 2018 : Demo Task management code
	This is a common header for all pages.
	This is also used for display messages/push notification, also to manage messaging services.
*/	
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { AppComponent } from './../../app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { MessagingService } from "./../../shared/messaging.service";
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	message;
  	constructor(public db: AngularFireDatabase,public messagingService: MessagingService,public http:Http) { }

  	ngOnInit() {
  		const userId = 'user001';
  		this.messagingService.requestPermission(userId)
  		this.messagingService.receiveMessage()
      this.message = this.messagingService.currentMessage
  	}

}
