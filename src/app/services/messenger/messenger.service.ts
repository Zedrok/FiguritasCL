import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(Product){
    console.log(Product);
    this.subject.next(); /*triggering*/
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
