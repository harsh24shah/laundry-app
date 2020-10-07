import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  public pageTitleChanged$ = new BehaviorSubject<string>('');
  public pageTitle$ = this.pageTitleChanged$.asObservable();

  public showBackIcon$ = new BehaviorSubject<boolean>(false);
  public backIcon$ = this.showBackIcon$.asObservable();

  constructor() { }

  changeTitlle(data: string) {      
    this.pageTitleChanged$.next(data);
  }

  showBackIcon(data:boolean) {
    this.showBackIcon$.next(data);
  }

}
