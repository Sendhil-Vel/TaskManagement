/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is for adding tasks to Firebase.
*/
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MessagingService } from "./../../shared/messaging.service";
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
	/*
		Sendhil : 25 Sept 2018 : Demo Task management code
		varible declaration
	*/
	lat: any;
	lng: any;
	title = 'ManageMyTask';
	description = 'Manage My Task with Notification & Map';

	taskValue = '';
	taskDescriptionValue = '';
	taskDateValue = '';
	taskTimeValue = '';
	tasks: Observable<any[]>;
	ob:Observable<Response>;
	url: string;
	message;
	issubmit = false;
	angularForm = new FormGroup ({
		task: new FormControl(),
		taskDescription: new FormControl(),
		taskDate: new FormControl(),
		taskTime: new FormControl()
	  });
	constructor (private httpService: HttpClient, public messagingService: MessagingService, public db: AngularFireDatabase, private fb: FormBuilder) { 
		this.createForm();
	}
	
	createForm() {
		this.angularForm = this.fb.group({
			task: ['', Validators.required ],
			taskDescription: ['', Validators.required ],
			taskDate: ['', Validators.required ],
			taskTime: ['', Validators.required ]
		});
	}

    ngOnInit () {
    }

	/*
		Sendhil : 25 Sept 2018 : Demo Task management code
		This will be called when task related information is submitted.
	*/
	onSubmit() {
		var dtTmp = new Date(this.taskDateValue);
		var newDate = dtTmp.getFullYear() + "-" + (dtTmp.getMonth()+1) + "-" + dtTmp.getDate() + "T"+this.taskTimeValue+":00";
		this.db.list('/tasks').push({ task: this.taskValue,taskDescription: this.taskDescriptionValue,taskDate: newDate });
		this.taskValue = '';
		this.taskDescriptionValue = '';
		this.taskDateValue = '';
	}
}
