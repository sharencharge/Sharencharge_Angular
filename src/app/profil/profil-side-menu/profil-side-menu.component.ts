import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil-side-menu',
  templateUrl: './profil-side-menu.component.html',
  styleUrls: ['./profil-side-menu.component.scss']
})
export class ProfilSideMenuComponent {

  @Input() 
  menuName : string ="";
  
}
