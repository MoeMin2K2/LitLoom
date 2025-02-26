import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = 'users';

  constructor() { }

  register(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.users, JSON.stringify(users));
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.users) || '[]');
  }

  getCurrentUser(email: string) {
    const users = this.getUsers();
    return users.find((user: any) => user.email === email);
  }

  updateUser(updatedUser: any) {
    let users = this.getUsers();
    users = users.map((user: any) => user.email === updatedUser.email ? updatedUser : user);
    localStorage.setItem(this.users, JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    const user = this.getCurrentUser(email);
    return user && user.password === password;
  }

  getCurrentUserEmail(): any {
    return localStorage.getItem('currentUserEmail');
  }

  deleteUser(email: string) {
    let users = this.getUsers();
    users = users.filter((user: any) => user.email !== email);
    localStorage.setItem(this.users, JSON.stringify(users));
    localStorage.removeItem('currentUserEmail');
    localStorage.removeItem('token');
  }
}
