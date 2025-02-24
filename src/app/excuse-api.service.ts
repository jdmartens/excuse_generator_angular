import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcuseApiService {

  constructor(private http: HttpClient) { }

  getExcuse(type: string): Observable<any> {
    return this.http.get<string>(`${environment.apiUrl}/${type}-excuse`);
  }
}
