import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import {AppComponent} from './app.component'
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import { NavbarComponent } from "./components/navbar/navbar.component";

import {routing} from './app.routing';

@NgModule({
    imports: [
      BrowserModule,
      routing,
      FormsModule,
      HttpModule,
      MaterialModule
    ],
   declarations: [
      AppComponent,
      TodoCmp,
      NavbarComponent
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      AppComponent
    ],
})
export class AppModule {}
