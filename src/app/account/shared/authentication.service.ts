import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVER_URL } from 'src/app/shared/shared.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  login({ username, password }: { username: string; password: string }): Observable<any> {
    return this.http.post(`${API_SERVER_URL}/login`, { username, password });
  }
}
