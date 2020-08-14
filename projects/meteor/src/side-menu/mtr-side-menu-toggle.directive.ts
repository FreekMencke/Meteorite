import { Directive, HostListener } from '@angular/core';
import { MeteorSideMenuService } from './mtr-side-menu.service';

@Directive({
  selector: '[mtrSideMenuToggle]',
})
export class MeteorSideMenuToggleDirective {

  constructor(
    private mtrSideMenuService: MeteorSideMenuService,
  ) { }

  @HostListener('click') onClick(): void {
    this.mtrSideMenuService.toggle();
  }

}
