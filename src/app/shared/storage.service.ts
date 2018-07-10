import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setValue(key: string, value: string) {
      if(this._checkSupport()) {
        localStorage.setItem(key, value);
      }
  }

  getValue(key: string) {
    if(this._checkSupport()) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  removeValue(key: string) {
    if(this._checkSupport()) {
      return localStorage.removeItem(key);
    } else {
      return null;
    }
  }

  private _checkSupport() : boolean {
    if (typeof(Storage) !== "undefined") {
      return true;
    } else {
        return false;
    }
  }
}
