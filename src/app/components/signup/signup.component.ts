import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fName:['', [Validators.required]],
      lName:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      pwd:['', [Validators.required]]
    })
  }

  signup(){
    console.log('here my user', this.signupForm.value );
    this.userService.signup(this.signupForm.value).subscribe(
      (data)=> {
        console.log('Here data', data);
        
      }
    )
  }

}
