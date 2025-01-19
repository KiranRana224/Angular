import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: any;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  formSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.loginService.loginUser(data).subscribe(
        (res) => {
          console.log('successfully login');
          this.router.navigate(['sales']);
        },
        (err) => {
          this.error = err.error.message;
          console.log(err.error.message);
        }
      );
    } else {
      this.snackbar.open('Enter Valid data', 'OK', { duration: 3000 });
    }
  }
}
