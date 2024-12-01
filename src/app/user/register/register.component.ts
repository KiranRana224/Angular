import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!:FormGroup;
  public error:any
  constructor( private fb:FormBuilder,private loginService:LoginService,private router:Router){
    this.registerForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  formRegisterSubmit(){
    const data = this.registerForm.value;
    this.loginService.registerUser(data).subscribe((res)=>{
      console.log("successfully regisater");
      this.router.navigate(['login'])
    },err=>{
      this.error = err.error.message
      console.log(err.error.message);
      
    })
  }
}
