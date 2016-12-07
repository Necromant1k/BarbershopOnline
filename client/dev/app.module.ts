import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule
    ],
   declarations: [
      TodoCmp,
      NavbarComponent
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      NavbarComponent,
    ],
})
export class AppModule {}
