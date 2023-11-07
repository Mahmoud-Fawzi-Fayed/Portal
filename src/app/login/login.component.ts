import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<any>;

  studentData: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    protected authService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.http.get('assets/student_data_AI.json').subscribe(
      (data: any) => {
        this.studentData = data;
      },
      (error) => {
        console.error('Error loading JSON data:', error);
      }
    );
  }

  onSubmit() {
    console.log('Form submitted');

    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;

      const matchingStudent = this.studentData.find(
        (student: { [x: string]: any }) => {
          return (
            student['بريد النظام'] == email &&
            student['رقم البطاقة'] == password
          );
        }
      );

      if (matchingStudent) {
        this.authService.login(matchingStudent);
        console.log('Login successful!');
      } else {
        this.loginForm.setErrors({ incorrectCredentials: true });
        console.log('Login failed. Please check your credentials.');
      }
    } else {
      this.loginForm.setErrors({ emptyFields: true });
    }
  }
}
