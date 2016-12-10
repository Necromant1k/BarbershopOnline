import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./oauth/auth.guard";

import {TodoCmp} from "./todo/components/todo-cmp";
import {ProfileComponent} from "./components/profile/profile.component";


const appRoutes: Routes = [
  {
    path: 'test',
    component: TodoCmp
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
