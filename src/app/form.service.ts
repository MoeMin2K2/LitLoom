import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  isLoggedIn(): boolean {
    console.log("Token", localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    return token != null;
  }
}
