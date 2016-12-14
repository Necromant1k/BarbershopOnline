import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {routing} from './app.routing';

import { Auth } from './oauth/auth.service';
import { AuthGuard } from './oauth/auth.guard';

import { AppComponent } from './app.component'
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SaloonComponent } from './components/saloon/saloon.component';
import { SaloonService } from './services/saloon/saloon.service';
import { SingleSaloonComponent} from './components/single.saloon/saloonSingle.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SlickSliderComponent } from './components/slick-slider/slick-slider.component';
import { FormValidationComponent } from './components/form-validation/validation.component';
import { MyDatePickerModule } from 'mydatepicker/dist/my-date-picker.module';

@NgModule({
    imports: [
      BrowserModule,
      routing,
      FormsModule,
      HttpModule,
      MaterialModule.forRoot(),
      ReactiveFormsModule,
      MyDatePickerModule
    ],
   declarations: [
      AppComponent,
      TodoCmp,
      NavbarComponent,
      ProfileComponent,
      SaloonComponent,
      SingleSaloonComponent,
      MainPageComponent,
      SlickSliderComponent,
      FormValidationComponent,


   ],
    providers: [
      FormBuilder,
      TodoService,
      AUTH_PROVIDERS,
      Auth,
      AuthGuard,
      SaloonService

    ],
    bootstrap: [
      AppComponent
    ],
})
export class AppModule {}
