import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToken } from 'src/models/i-token';
import { ApiLoginService } from 'src/service/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  token : IToken | undefined;

  username : string = ""
  password : string  = ""

  constructor(private apiLoginService: ApiLoginService,
              private router: Router) {

  }

  ngOnInit() {
   if(localStorage.getItem("id")){
    this.router.navigate(['/']);
   }
  }
  
  submit() {
    this.apiLoginService.getLogin(this.username, this.password).subscribe(res => {
      console.log(res);
      this.token = res;
      console.log(this.token.accessToken);
      console.log(this.token.id);
      localStorage.setItem("jwtToken", this.token.accessToken);
      localStorage.setItem("id", String(this.token.id));
      location.reload();
      
    });
  }
}
