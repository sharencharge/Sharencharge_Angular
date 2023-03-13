import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStation } from 'src/models/i-station';

@Injectable({
  providedIn: 'root'
})
export class ApiStationService {

  private url : string;

  constructor(private http : HttpClient, @Inject('rawUrl') url :string) { 
    this.url = url;
  }



  findAllStations() : Observable<IStation[]> {
    return this.http.get<IStation[]>(this.url+"stations/");
  }

  findAllStationsPageable(countItem: number, numberPage : number) : Observable<IStation[]> {
    return this.http.get<IStation[]>(this.url+"stations/?limit="+countItem+"&page="+numberPage);
  }


  findStation(id : number) : Observable<IStation> {
    return this.http.get<IStation>(this.url+"stations/"+id);
  }
}
