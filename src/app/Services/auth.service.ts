import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private userKey = 'authUser';

  constructor() {}

  signup(email: string, password: string): boolean {
    console.log('Signup called with', email, password);
    const users = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    const existingUser = users.find((user: any) => user.email === email);
  
    if (existingUser) {
      return false; 
    }
  
    users.push({ email, password });
    localStorage.setItem(this.userKey, JSON.stringify(users));
    return true;
  }
  

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      const token = this.generateToken();
      localStorage.setItem(this.tokenKey, token);
      return true;
    }

    return false;
  }
IsLoggedIn(): boolean {
  return !!this.getToken();
}


  private generateToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
   
  }
}
