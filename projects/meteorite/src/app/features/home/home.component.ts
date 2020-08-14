import { Component } from '@angular/core';

@Component({
  selector: 'mit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  goToCodeCometIO(): void {
    window.location.assign('/CodeCometIO/');
  }

}
