import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  selectedProduct = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  public getAllProductData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
