import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/interface/product';

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

  deleteObject(path: string) {
    localStorage.setItem(path, JSON.stringify([]));
  }

  getSpecificData(path: string, key: string) {
    let list = this.getSavedObject(path);
    list = list.filter((item: Product) => item.slug === key);
    return list[0];
  }
}
