import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../shared/password-match.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(private fb: FormBuilder) {}

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
