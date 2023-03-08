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

  constructor(private apiStationService : ApiStationService) {
  }

  ngOnInit(){
    this.findAllStations();
  }

  findAllStations() : void {
    this.apiStationService.findAllStations().subscribe(res =>{
      this.stations =  res;
    })
  }
}
