"use strict";

import * as express from 'express';
import {SaloonController} from '../controller/saloon.controller';

export class SaloonRoutes {
  static init(router: express.Router){
    router
      .route('/api/saloons')
      .get(SaloonController.getAll);

    router
      .route('/api/saloons/:id')
      .get(SaloonController.getSaloon);
  }
}
