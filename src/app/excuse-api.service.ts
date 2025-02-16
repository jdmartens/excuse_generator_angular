import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcuseApiService {
  private apiUrl = 'http://localhost:8000';
  
  constructor(private http: HttpClient) { }

  getExcuse(type: 'work' | 'late' | 'help' | 'busy'): Observable<any> {
    return this.http.get<string>(`${this.apiUrl}/${type}-excuse`);
  }
}
