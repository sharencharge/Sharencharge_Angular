import { Component } from '@angular/core';
import { IStation } from 'src/models/i-station';
import { ApiStationService } from 'src/service/api-station.service';

@Component({
  selector: 'app-borne-list',
  templateUrl: './borne-list.component.html',
  styleUrls: ['./borne-list.component.scss']
})
export class BorneListComponent {
  stations : IStation[] | null = null;
  itemCount : number = 6;
  page : number = 0;
  search : string = "";
  maxPage : number = 0;
  totalItem: number = 0;

  constructor(private apiStationService : ApiStationService) {
  }

  ngOnInit(){
    this.findAllStations();
  }

  findAllStations() : void {
    if( this.search.length >= 0 ){
      console.log(this.search);
      
      this.apiStationService.findStationByCity(this.search,this.itemCount, this.page).subscribe(res => {
        this.stations = res.body;
        //console.log(res.headers);
        //console.log(res.headers.get("x_nb_max_pages"));
        //this.totalItem = res.headers.get("x_nb_max_elements");
      })
    }
  }

  updateDatas(search: string): void {
    console.log(search);
    this.search = search
    this.page = 0;
    this.findAllStations()
  }

  pageUp(){
    this.page ++;
    this.findAllStations()
  }
  pageDown(){
    this.page --;
    this.findAllStations()
  }
}
