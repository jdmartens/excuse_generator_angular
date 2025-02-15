import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcuseApiService {
  private apiUrl = 'http://localhost:8000';
  
  constructor(private http: HttpClient) { }

  getWorkExcuse(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/work-excuse`);
  }

  getLateExcuse(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/late-excuse`);
  }

  getHelpExcuse(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/help-excuse`);
  }

  getBusyExcuse(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/busy-excuse`);
  }
}
