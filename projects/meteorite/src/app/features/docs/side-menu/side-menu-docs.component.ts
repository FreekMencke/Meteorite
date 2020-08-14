import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-side-menu-docs',
  templateUrl: './side-menu-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuDocsComponent implements AfterViewInit {

  codeExample: string = `
<mtr-container [fullWidth]="true">
  <mtr-side-menu>
    <mtr-side-menu-item-list title="Side menu">
      <mtr-side-menu-item>Container</mtr-side-menu-item>
      <mtr-side-menu-item class="mtr-side-menu-item--active">Side menu</mtr-side-menu-item>
    </mtr-side-menu-item-list>

    <mtr-side-menu-content>
      <mtr-container [center]="false">
        <main>
          <h2>Hello World!</h2>
        </main>
      </mtr-container>
    </mtr-side-menu-content>

  </mtr-side-menu>
</mtr-container>
`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
