import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  constructor() { }
  title = 'Signup Page';
  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

onSubmit(){
  console.log(this.signupForm.value);
  alert('Form Submitted Successfully');
}


}
