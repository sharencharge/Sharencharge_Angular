import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Station } from '../models/station';
import { User } from '../models/user';

@Component({
  selector: 'app-borne-show',
  templateUrl: './borne-show.component.html',
  styleUrls: ['./borne-show.component.scss']
})
export class BorneShowComponent implements OnInit {
  station : Station | null = null;

  ngOnInit(){
    var address = new Address('Clermont-Ferrand', 'rue Chucky', '42');
    var user = new User(1, "Pedro", "Hermanel");
    this.station = new Station(1, 'Borne1', 'Rapide','https://images.freejpg.com.ar/400/3012/woman-holding-umbrella-against-yellow-wall-F100036587.jpg', address, user );
    
  }
  choixClient(){
    this.choixClient;
  }
}