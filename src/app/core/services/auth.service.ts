import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = signal<User | null>(null);
  private isAuthenticated = signal(false);

  user = this.currentUser.asReadonly();
  isLoggedIn = this.isAuthenticated.asReadonly();

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          const user = { id: 1, name: 'John Doe', email };
          this.currentUser.set(user);
          this.isAuthenticated.set(true);
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
          }
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }

  logout() {
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('user');
    }
  }

  checkAuthStatus() {
    if (typeof localStorage !== 'undefined') {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.currentUser.set(JSON.parse(savedUser));
        this.isAuthenticated.set(true);
      }
    }
  }
}
