import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="happy banking with us.."
  pdata="enter account no"
  acno:any=""

  constructor() { }

  ngOnInit(): void {

  }


  login(){
    alert("login clicked")
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  passChange(event:any){
    console.log(event.target.value);
    
  }
}
