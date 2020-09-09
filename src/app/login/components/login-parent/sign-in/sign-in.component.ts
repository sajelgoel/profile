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

  emailPattern:RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
