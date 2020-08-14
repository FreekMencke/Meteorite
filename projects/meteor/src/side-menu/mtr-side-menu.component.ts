import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MeteorSideMenuService } from './mtr-side-menu.service';

@Component({
  selector: 'mtr-side-menu',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MeteorSideMenuService],
})
export class MeteorSideMenuComponent implements OnInit, OnDestroy {

  private readonly destroyed$: Subject<void> = new Subject();

  @HostBinding('class.mtr-side-menu--closed') closed: boolean;

  constructor(
    private mtrSideMenuService: MeteorSideMenuService,
  ) { }

  ngOnInit(): void {
    this.mtrSideMenuService.open(); // TODO: relace with width check
    this.mtrSideMenuService.isOpen$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isOpen => this.closed = !isOpen);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
