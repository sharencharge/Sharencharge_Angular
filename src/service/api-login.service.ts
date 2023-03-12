import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from 'src/models/i-token';
import { IUser } from 'src/models/i-user';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  private url : string;

  constructor(private http : HttpClient, @Inject('rawUrl') url :string) { 
    this.url = url;
  }

  getLogin(login : string, passwd :string) : Observable<IToken> {
    return this.http.post<IToken>(this.url+"auth/signin",
    {
      username: login,
      password: passwd
    },
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  )
  }
}
