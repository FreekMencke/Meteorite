import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-side-menu-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuContentComponent { }
