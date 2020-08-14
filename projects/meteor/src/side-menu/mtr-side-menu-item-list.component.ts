import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-item-list',
  template: `
    <mtr-btn *ngIf="toggle" class="mtr-side-menu__toggle" flat mtrSideMenuToggle>&#9776;</mtr-btn>
    <h2 *ngIf="title" class="mtr-side-menu__title">{{ title }}</h2>
    <ng-content></ng-content>
  `,
  styleUrls: ['./mtr-side-menu-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuItemListComponent {
  @Input() toggle: boolean = true;

  @Input() title: string = '';
}
