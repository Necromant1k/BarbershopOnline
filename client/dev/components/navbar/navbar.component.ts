import {Component} from '@angular/core';
import {Auth} from '../../oauth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
  profile: any;

  constructor(private auth: Auth){
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }
}
