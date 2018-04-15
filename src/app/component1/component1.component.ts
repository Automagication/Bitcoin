import { Component, OnInit } from '@angular/core';
import {Component1Service} from '../component1.service';
import {Observable} from 'rxjs/Observable';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit {
  hi = 'HELLO!!!';
  result:any[];
  keysArray:string[];
  valuesArray:TICKER[];
  constructor( private component1service: Component1Service)
  {
      this.component1service.getExchangePrice().subscribe(data => {this.result = data;
      this.keysArray = Object.keys(this.result);
      this.valuesArray = Object.values(this.result);
    });
  }
  ngOnInit()
   {

   }
}
interface TICKER
{
  '15m':number;
  last:number;
  buy:number;
  sell:number;
  symbol:string;
}
