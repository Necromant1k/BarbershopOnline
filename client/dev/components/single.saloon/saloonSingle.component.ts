import {  Component, Inject, OnInit } from '@angular/core';
import {SaloonService} from '../../services/saloon/saloon.service';
import {Router, ActivatedRoute} from '@angular/router';

type Saloon = {
  _id?: string,
  name: string,
  service: saloonServiceInterface
}

@Component({
  moduleId: module.id,
  selector: 'single-saloon',
  templateUrl: 'saloonSingle.component.html'
})
export class SingleSaloonComponent implements OnInit{
  title: '';
  saloon: Saloon[] = [];

  constructor(private _saloonService: SaloonService, private _route: ActivatedRoute){

  }
  ngOnInit(){
    this._route.params.map(params => params['id'])
                      .subscribe((id) => {
                        this._saloonService.getSaloon(id)
                            .subscribe(saloon => {
                              this.saloon = saloon;
                            })
                      })
  }

  private _getSaloon(id:string):void{
    this._saloonService.getSaloon(id)
                       .subscribe(saloon => {
                         this.saloon = saloon;
                       });
  }
}

interface saloonServiceInterface {
  name: string,
  price: number,
  discount: serviceDiscountInterface
}

interface serviceDiscountInterface{
  size: number,
  name: string
}
