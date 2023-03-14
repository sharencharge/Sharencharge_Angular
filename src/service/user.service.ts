import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/models/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string;

  constructor(private http : HttpClient, @Inject('rawUrl') url :string) { 
    this.url = url;
  }



  findUserById(idUser : number) : Observable<IUser>{
    return this.http.get<IUser>(this.url+"users/"+idUser);
  }
}
