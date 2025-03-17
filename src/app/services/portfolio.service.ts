import { Injectable } from '@angular/core';
import { Portfolio } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private httpClient: HttpClient) {}

  getProperties(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>('/assets/data/properties.json');
  }
}
