import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-btn',
  templateUrl: './mtr-button.component.html',
  styleUrls: ['./mtr-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorButtonComponent { }
