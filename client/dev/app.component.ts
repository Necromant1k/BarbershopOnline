import {Component} from '@angular/core';
import {Auth} from './oauth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'main-barbershop',
  templateUrl: 'app.component.html'
})

export class AppComponent{
  constructor(private auth: Auth){

  }
}
