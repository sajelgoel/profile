import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Signin } from '../../../model/signin.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() currentPage = new EventEmitter();
  userCreds:Signin = new Signin();

  constructor() {}

  ngOnInit(): void {
  }

  goToSignup(){
    this.currentPage.emit("signup");
  }

  submit(form,a,b){
      console.log(form)
      console.log(a)
      console.log(b)
  }
}
