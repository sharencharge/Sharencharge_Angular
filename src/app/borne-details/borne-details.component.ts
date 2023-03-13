import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStation } from 'src/models/i-station';
import { ApiStationService } from 'src/service/api-station.service';

@Component({
  selector: 'app-borne-details',
  templateUrl: './borne-details.component.html',
  styleUrls: ['./borne-details.component.scss']
})
export class BorneDetailsComponent implements OnInit{

  station : IStation | undefined;

  constructor(private apiStationService: ApiStationService,
              private route : ActivatedRoute
    ) {
    
  }

  ngOnInit(): void {
    this.findStationById(Number(this.route.snapshot.paramMap.get('idStation')));
  }
  findStationById(idStation: number) {
    this.apiStationService.findStation(idStation).subscribe(res =>{
      this.station = res;
    })
  }

  

}
