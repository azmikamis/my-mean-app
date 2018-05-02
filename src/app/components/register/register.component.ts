import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials:{
    name:string,
    email:string,
    password:string
  };

  constructor() { }

  ngOnInit() {
    this.credentials = {
      name: '',
      email: '',
      password: ''
    };
  }

}
