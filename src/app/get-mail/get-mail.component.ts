import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-mail',
  templateUrl: './get-mail.component.html',
  styleUrls: ['./get-mail.component.scss']
})
export class GetMailComponent {

  loginForm: FormGroup<any>;
  matchingStudent: any;
  studentData: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient  
    ) {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
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

    const idControl = this.loginForm.get('id');

    if (idControl) {
      const id = idControl.value;

      const matchingStudent = this.studentData.find(
        (student: { [x: string]: any }) => {
          return (
            student['رقم البطاقة'] == id
          );
        }
      );

      if (matchingStudent) {
        this.matchingStudent = matchingStudent;
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
