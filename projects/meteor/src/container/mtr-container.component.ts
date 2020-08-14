import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mtr-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorContainerComponent {

  @Input() @HostBinding('class.mtr-container--expand-with-header') expandWithHeader: boolean = false;
  @Input() @HostBinding('class.mtr-container--expand-height') expandHeight: boolean = false;
  @Input() @HostBinding('class.mtr-container--full-width') fullWidth: boolean = false;
  @Input() @HostBinding('class.mtr-container--center') center: boolean = true;

}
