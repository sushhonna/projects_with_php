import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router : Router){}
  register(){
    alert("Registered successfully..!")
    this.router.navigate(['login']);
  }

}
