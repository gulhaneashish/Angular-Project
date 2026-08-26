import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

 login(email: string, password: string) {
  return this.http.post<{ token: string; role: string }>(
    'http://localhost:3000/login',
    {
      email,
      password
    }
  );
}

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
}

  saveRole(role: string) {
  localStorage.setItem('role', role);
}
getRole(): string | null {
  return localStorage.getItem('role');
}
}