import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  selectedProduct = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  public getMockData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
