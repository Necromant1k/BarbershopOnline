import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //configure Auth0

  lock = new Auth0Lock('antKbpBh3LPrr8I1Iypcft0GWC5ice3W', 'necromant1k.eu.auth0.com', {});

  constructor(){
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function (err:any, profile:any) {
        if(err){
          throw new Error(err);
        }
        //set profile
        localStorage.setItem('profile', JSON.stringify(profile));

        //set token
        localStorage.setItem('id_token', authResult.idToken);
      });
    });
  }
  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }
  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }
  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
