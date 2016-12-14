import {  Component, Inject, OnInit, Compiler } from '@angular/core';

import {SaloonService} from '../../services/saloon/saloon.service';

type Saloon = {
  _id?: string,
  name: string,
  service: saloonServiceInterface
}

@Component({
  moduleId: module.id,
  selector: 'saloon',
  templateUrl: 'saloon.component.html'
})
export class SaloonComponent implements OnInit{
  title: "Салоны красоты";
  saloons : Saloon[] = [];

  constructor(private _saloonService: SaloonService, private _compiler: Compiler){
    this._compiler.clearCache();

  }

  ngOnInit(){
    this._getAll();
  }

  private _getAll():void{
    this._saloonService.getAll()
                       .subscribe((saloon) => {
                         this.saloons = saloon;
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
