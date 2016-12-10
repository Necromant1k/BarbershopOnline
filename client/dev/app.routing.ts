import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodoCmp} from "./todo/components/todo-cmp";
import {ProfileComponent} from "./components/profile/profile.component";

const appRoutes: Routes = [
  {
    path: 'test',
    component: TodoCmp
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
