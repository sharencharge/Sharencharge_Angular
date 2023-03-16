import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from 'src/models/i-address';
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

  findAddressById(idAddress : number) : Observable<IAddress>{
    return this.http.get<IAddress>(this.url+"users/address/"+idAddress);
  }
  
}
