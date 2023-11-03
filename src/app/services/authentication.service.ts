import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInStudent: any = null;

  login(student: any) {
    this.loggedInStudent = student;
  }

  logout() {
    this.loggedInStudent = null;
  }

  getLoggedInStudent() {
    return this.loggedInStudent;
  }

  isLoggedIn() {
    return this.loggedInStudent !== null;
  }
}
