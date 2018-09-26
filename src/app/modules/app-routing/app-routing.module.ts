/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is main routing module.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { DashboardComponent }      from './../../components/dashboard/dashboard.component';
import { AddTaskComponent } from './../../components/add-task/add-task.component';
import { ListTaskComponent } from './../../components/list-task/list-task.component';
import { LocationComponent } from './../../components/location/location.component';
import { PageNotFoundComponent }      from './../../components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'list-task', component: ListTaskComponent },
  { path: 'location', component: LocationComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  /*imports: [
    CommonModule
  ],
  declarations: []*/
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
