import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveObject(object: any, path: string) {
    localStorage.setItem(path, JSON.stringify(object));
  }

  getSavedObject(path: string): any {
    if (
      localStorage.getItem(path) === '[]' ||
      localStorage.getItem(path) === null
    ) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem(path) || '{}');
    }
  }
}
