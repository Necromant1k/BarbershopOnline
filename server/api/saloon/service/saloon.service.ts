import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';

import saloonSchema from '../model/saloon.model';

saloonSchema.static('getAll', ():Promise<any> => {
  return new Promise((resolve: Function, reject: Function)=> {
    let _query = {};

    Saloon.find(_query).exec((err, saloons) => {
      err ? reject (err) : resolve(saloons);
    })
  })
});

saloonSchema.static('getSaloon', (id:string):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    Saloon
      .findById(id)
      .exec((err, saloon) => {
        err ? reject(err)
          : resolve(saloon);
      });
  });
});

let Saloon = mongoose.model('Saloon', saloonSchema);

export default Saloon;
