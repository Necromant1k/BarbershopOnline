import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {routing} from './app.routing';

import {Auth} from './oauth/auth.service';

import { AppComponent } from './app.component'
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProfileComponent } from "./components/profile/profile.component";

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
      NavbarComponent,
      ProfileComponent
    ],
    providers: [
      TodoService,
      AUTH_PROVIDERS,
      Auth

    ],
    bootstrap: [
      AppComponent
    ],
})
export class AppModule {}
