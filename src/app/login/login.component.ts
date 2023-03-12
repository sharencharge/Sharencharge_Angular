import { Component } from '@angular/core';
import { IToken } from 'src/models/i-token';
import { ApiLoginService } from 'src/service/api-login.service';
import { ApiStationService } from 'src/service/api-station.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token : IToken | undefined;

  constructor(private apiLoginService: ApiLoginService,) {
    this.testLogin()
  }

  testLogin(): void {
    this.apiLoginService.getLogin("toto", "tototo").subscribe(res => {
      console.log(res);
      this.token = res;
      console.log(this.token.accessToken);
      localStorage.setItem("jwtToken", this.token.accessToken);
      
    });
  }
}
