
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConfigApiService {

  private url: string = 'http://localhost:3000/config'

  constructor(private http: HttpClient) {}

  get(): Observable<ConfigResponse> {
    return this.http.get<ConfigResponse>(this.url);
  }
}