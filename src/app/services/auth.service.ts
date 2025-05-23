import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/pos-api/users/';
  private storageKey = 'pos-username';

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    const data = {
      ...payload,
      action: 'login'
    };
    return this.http.post<any>(this.apiUrl, data).pipe(
      tap((res) => {
        if (res && res?.payload?.username) {
          console.log(res.payload.username);
          
          localStorage.setItem(this.storageKey, res.payload.username);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getUsername(): string | null {
    return localStorage.getItem(this.storageKey);
  }
}
