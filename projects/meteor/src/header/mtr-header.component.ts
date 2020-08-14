import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mtr-header',
  templateUrl: './mtr-header.component.html',
  styleUrls: ['./mtr-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorHeaderComponent implements OnInit, OnDestroy {
  private readonly destroyed$: Subject<void> = new Subject();

  private breakpointDesktop: number;

  open: boolean = false;

  constructor(private cdRef: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.breakpointDesktop = Number(
      getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-desktop').slice(0, -2),
    );

    this.router.events
      .pipe(
        takeUntil(this.destroyed$),
        filter(() => this.open),
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => this.close());

    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroyed$),
        filter(() => this.open && this.breakpointDesktop <= window.innerWidth),
      )
      .subscribe(() => this.close());
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  toggle(): void {
    this.open = !this.open;
  }

  close(): void {
    this.open = false;
    this.cdRef.markForCheck();
  }
}
