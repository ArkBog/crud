import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeTabService {

  cardIndex:number = 0

  private TabSource = new Subject<void>();
  newTab = this.TabSource.asObservable();

  newTabFunction(){
    this.TabSource.next()
  }

  constructor() { }
}
