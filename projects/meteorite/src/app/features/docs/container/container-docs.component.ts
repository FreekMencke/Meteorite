import { ChangeDetectionStrategy, Component, AfterViewInit, AfterContentInit } from '@angular/core';

import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-container-docs',
  templateUrl: './container-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerDocsComponent implements AfterViewInit {

  codeExample: string = `
<mtr-header>
  <h1 mtr-header__branding>Meteor</h1>
  <a mtr-header__nav-item>Home</a>
  <a mtr-header__nav-item class="mtr-header__nav-item--active">Documentation</a>
</mtr-header>
<mtr-container>
  <main class="p--l">
    <h2>Hello World!</h2>
  </main>
</mtr-container>`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
