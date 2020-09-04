import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() currentPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goToSignin(){
    this.currentPage.emit("signin");
  }
}
