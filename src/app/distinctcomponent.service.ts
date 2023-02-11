import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistinctcomponentService {
  // private mymessage = new Subject<string>();
  private mymessage = new BehaviorSubject<string>('1');
  teachermessage$ = this.mymessage.asObservable();
  constructor() { }

  sendMessage(message:string){
    this.mymessage.next(message)
  }
}
