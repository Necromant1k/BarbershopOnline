import * as express from 'express';
import Saloon from '../service/saloon.service';

export class SaloonController{
  static getAll(req: express.Request, res: express.Response){
    Saloon['getAll']()
      .then(saloons => res.status(200).json(saloons))
      .catch(error => res.status(400).json(error));
  }

  static getSaloon(req: express.Request, res: express.Response){
    let _id = req.params.id;

    Saloon
      ['getSaloon'](_id)
      .then(saloons => res.status(200).json(saloons))
      .catch(error => res.status(400).json(error));
  }
}
