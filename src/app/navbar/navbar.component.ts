import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges{
  
  constructor(private router : Router ) {
    
  }

  isConnected : boolean = localStorage.getItem("jwtToken") != null;

  ngOnInit(): void {
    this.isConnected = localStorage.getItem("jwtToken") != null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isConnected = localStorage.getItem("jwtToken") != null;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/");
    location.reload();
  }
}
