import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private apiLoginService: ApiLoginService,) {

  }

  ngOnInit() {
   
  }
  
  submit() {
    this.apiLoginService.getLogin(this.username, this.password).subscribe(res => {
      console.log(res);
      this.token = res;
      console.log(this.token.accessToken);
      localStorage.setItem("jwtToken", this.token.accessToken);
      
    });
  }
}
