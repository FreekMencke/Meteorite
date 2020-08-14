import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-banner-docs',
  templateUrl: './banner-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerDocsComponent implements AfterViewInit {

  codeExample: string = `
<mtr-header secondary inverse>
  <h1 mtr-header__branding>Meteor</h1>
  <a mtr-header__nav-item>Home</a>
  <a mtr-header__nav-item class="mtr-header__nav-item--active">Documentation</a>
</mtr-header>
<mtr-banner secondary>
  <mtr-container class="p--l text--center">
    <h1 class="mb--xl">
      Meteorite
      <div class="mtr-subtitle">The Meteor styleguide</div>
    </h1>
    <mtr-btn outline white>Documentation</mtr-btn>
  </mtr-container>
</mtr-banner>
<mtr-container class="p--l">
  <h2 secondary>Howdy!</h2>
  <p>How are you doing today?</p>
</mtr-container>`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
