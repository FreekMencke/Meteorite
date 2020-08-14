import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-item',
  template: `
    <div class="mtr-side-menu-item__content">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./mtr-side-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuItemComponent { }
