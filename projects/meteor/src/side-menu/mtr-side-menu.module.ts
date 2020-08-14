import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorButtonModule } from '../button';
import { MeteorSideMenuContentComponent } from './mtr-side-menu-content.component';
import { MeteorSideMenuItemListComponent } from './mtr-side-menu-item-list.component';
import { MeteorSideMenuItemComponent } from './mtr-side-menu-item.component';
import { MeteorSideMenuToggleDirective } from './mtr-side-menu-toggle.directive';
import { MeteorSideMenuComponent } from './mtr-side-menu.component';

const COMPONENTS = [
  MeteorSideMenuComponent,
  MeteorSideMenuContentComponent,
  MeteorSideMenuItemListComponent,
  MeteorSideMenuItemComponent,
  MeteorSideMenuToggleDirective,
];

@NgModule({
  imports: [CommonModule, MeteorButtonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class MeteorSideMenuModule {}
