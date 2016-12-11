import {  Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SaloonService{
  constructor(@Inject(Http) private _htpp: Http){}

  static ENDPOINT: string = "/api/saloons/:id";

  getAll(): Observable<any> {
    return this._htpp.get(SaloonService.ENDPOINT.replace(":id", ''))
                     .map(res => res.json());
  }

  getSaloon(id: string): Observable<any> {
    return this._htpp.get(SaloonService.ENDPOINT.replace(':id', id))
                     .map(res => res.json());
  }
}
