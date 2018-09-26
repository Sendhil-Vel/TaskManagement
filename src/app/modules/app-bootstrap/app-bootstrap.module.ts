/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This module is for importing the bootstrap and related information. 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, AlertModule],
  declarations: []
})
export class AppBootstrapModule { }
