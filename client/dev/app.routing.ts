import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodoCmp} from "./todo/components/todo-cmp";

const appRoutes: Routes = [
  {
    path: 'test',
    component: TodoCmp
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
