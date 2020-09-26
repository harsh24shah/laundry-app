import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglemenuService {
  public sidebarToggled$ = new BehaviorSubject<boolean>(false);
  public sidenav$ = this.sidebarToggled$.asObservable();

  constructor() { }

  setSideBarToggle(data: boolean) {      
    this.sidebarToggled$.next(data);
  }

}
