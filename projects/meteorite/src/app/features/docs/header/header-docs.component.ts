import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-header-docs',
  templateUrl: './header-docs.component.html',
  styleUrls: ['./header-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDocsComponent implements AfterViewInit {

  codeExample: string = `
<mtr-header>
  <h1 mtr-header__branding>Meteor</h1>
  <a mtr-header__nav-item>Home</a>
  <a mtr-header__nav-item class="mtr-header__nav-item--active">Documentation</a>
</mtr-header>`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
