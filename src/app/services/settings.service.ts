import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private booleanSource = new BehaviorSubject<boolean>(false);
  boolean$ = this.booleanSource.asObservable();
  constructor() { }

  setBoolean(booleanValue: boolean): void {
    this.booleanSource.next(booleanValue);
  }

}
