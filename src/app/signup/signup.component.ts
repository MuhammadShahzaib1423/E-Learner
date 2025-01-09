import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupform: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.signupform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignup(): void {  
    if (this.signupform.valid) {
      const { email, password } = this.signupform.value;
      const success = this.authService.signup(email, password);

      if (success) {
        alert('Signup successful');
        console.log('Signup successful');
        this.signupform.reset();
      } else {
        alert('Email already exists');
      }
    }
  }
  onSubmit(){
    this.router.navigate(['/login']);
    console.log('Login button clicked');
  }
}