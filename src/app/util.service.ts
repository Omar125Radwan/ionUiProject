import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isMenuEnabeld = new Subject<boolean>();

  constructor() { }

  setMenuState(enebeld) {
    this.isMenuEnabeld.next(enebeld);
  }

  getMenuState(): Subject<boolean> {
    return this.isMenuEnabeld;
  }

}
