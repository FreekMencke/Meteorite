import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mtr-banner',
  template: `
    <div class="mtr-banner__content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./mtr-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorBannerComponent { }
