/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is for listing tasks.
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MessagingService } from "./../../shared/messaging.service";
import { Http, Response } from '@angular/http';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
	tasks: Observable<any[]>;
    message;
    
    constructor (private httpService: HttpClient, public messagingService: MessagingService, public db: AngularFireDatabase) { 
    	this.tasks = db.list('tasks').valueChanges();
	}
    
    ngOnInit () {
		const userId = 'user001';
		this.messagingService.requestPermission(userId)
		this.messagingService.receiveMessage()
		this.message = this.messagingService.currentMessage
    }
}
