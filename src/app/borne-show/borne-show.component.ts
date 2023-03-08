import { Component, Input, OnInit } from '@angular/core';
import { IStation } from 'src/models/i-station';
import { ApiStationService } from 'src/service/api-station.service';
@Component({
  selector: 'app-borne-show',
  templateUrl: './borne-show.component.html',
  styleUrls: ['./borne-show.component.scss']
})
export class BorneShowComponent implements OnInit {
  
  @Input() station : IStation | null = null;

  constructor() {
    
  }

  ngOnInit(){

  }

  choixClient(){
    this.choixClient;
  }
}