import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.scss']
})
export class LoginParentComponent implements OnInit {

  selectedPage:string='signin';

  constructor() { }

  ngOnInit(): void {
  }

  selectPage(event){
    this.selectedPage = event;
  }

}
