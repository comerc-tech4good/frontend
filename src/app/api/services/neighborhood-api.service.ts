import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NeighborhoodResponse } from '../interfaces/neighborhood-response.interface';

@Injectable({
  providedIn: 'root',
})
export class NeighborhoodApiService {
  private url: string = 'http://localhost:3000/neighborhood';

  constructor(private http: HttpClient) {}

  getTop3(activity: string, parameters: string[]): Observable<NeighborhoodResponse[]> {
    const body = { activity, parameters };
    console.log(body);

    return this.http.post<NeighborhoodResponse[]>(this.url, body);
  }
}
