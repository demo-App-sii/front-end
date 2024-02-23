import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

//primeNg

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/home']);
        } else {
          if (response.length === 0) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User not found. Please register.',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Incorrect Email or Password',
            });
          }
        }
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something Went Wrong',
        });
      }
    );
  }
}
