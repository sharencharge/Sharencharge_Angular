import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/models/i-user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-profil-reservation',
  templateUrl: './profil-reservation.component.html',
  styleUrls: ['./profil-reservation.component.scss']
})
export class ProfilReservationComponent implements OnInit{

  user : IUser | undefined;

  constructor(private route : ActivatedRoute,
              private userService : UserService) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("id"));
    
    this.findUser(Number(localStorage.getItem("id")));
  }
  
  findUser(idUSer :number) {
    this.userService.findUserById(idUSer).subscribe(res => {
      this.user = res;
      console.log(res);
      
    });
  }

  
}


