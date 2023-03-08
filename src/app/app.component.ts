import { Component } from '@angular/core';
import { IStation } from 'src/models/i-station';
import { ApiStationService } from 'src/service/api-station.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
