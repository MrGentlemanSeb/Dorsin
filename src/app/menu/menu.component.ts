import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  logo: string = "NeonTech";
  A   : string = "Acceuil";
  S   : string = "Services";
  F   : string = "Fonctionalités";
  P   : string = "Prix";
  T   : string = "Equipe";
  B   : string = "Blog";
  C   : string = "Contact";
  btn :  string = "Demarrer";
  
}
