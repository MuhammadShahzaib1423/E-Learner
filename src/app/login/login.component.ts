import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      const success = this.authService.login(email, password);

      if (success) {
        alert('Login successful');
        console.log('Login successful');
        this.router.navigate(['/header']);
        this.loginForm.reset();
      } else {
        alert('Invalid email or password');
      }
    }
  }
  onsubmit(){
    this.router.navigate(['/signup']);
  }
}
