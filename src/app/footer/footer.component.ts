import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logo : string ='DORSIN';
  info : string ='Information';
  sup  : string = 'support';
  sub  : string = 'Subscribe';
}
