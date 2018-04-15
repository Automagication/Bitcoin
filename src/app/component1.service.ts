import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class Component1Service {


  constructor(private _http: Http)
  {

  }

  getExchangePrice()
  {
    return this._http.get('https://blockchain.info/ticker').
    map((res: Response) => res.json());
  }

}
