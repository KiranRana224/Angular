import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  error:any

  constructor(private loginService:LoginService,private fb:FormBuilder,private router:Router){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  ngOnInit(): void {
  }

  formSubmit(){
    const data = this.loginForm.value;
    this.loginService.loginUser(data).subscribe((res)=>{
      console.log("successfully login");
      this.router.navigate(['sales'])

    },err=>{
      this.error = err.error.message
      console.log(err.error.message);
      
    })
  }

}
