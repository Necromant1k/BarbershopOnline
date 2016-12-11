import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./oauth/auth.guard";

import {TodoCmp} from "./todo/components/todo-cmp";
import {ProfileComponent} from "./components/profile/profile.component";
import {SaloonComponent} from "./components/saloon/saloon.component";
import {SingleSaloonComponent} from './components/single.saloon/saloonSingle.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SaloonComponent
  },
  {
    path: 'test',
    component: TodoCmp
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'saloon/:id',
    component: SingleSaloonComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
