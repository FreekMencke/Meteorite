import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-card-docs',
  templateUrl: './card-docs.component.html',
  styleUrls: ['./card-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDocsComponent implements AfterViewInit {

  codeExample: string = `
<mtr-card>
  <div card--banner>
    <mtr-banner class="text--center">
      <h1>Card banner content</h1>
    </mtr-banner>
  </div>
  <div card--content>
    <h2>
      Card Title
      <div class="mtr-subtitle">Card subtitle</div>
    </h2>
    <p>This is a text that is full of nonsense. Just ignore this text and move on.</p>
    <p>This is a text that is full of nonsense. Just ignore this text and move on.</p>
  </div>
  <div card--actions>
    <mtr-btn flat>Action 1</mtr-btn>
    <mtr-btn flat>Action 2</mtr-btn>
  </div>
</mtr-card>

<mtr-card>
  <div card--banner>
    <mtr-banner class="px--xxl py--none" dark>
      <img src="assets/logo-dark.svg">
    </mtr-banner>
  </div>
  <div card--content>
    <h2 class="mtr-text--bold">
      CodeComet
      <div class="mtr-subtitle">Software that's out of this world.</div>
    </h2>
    <div>
      <p>CodeComet is the branding Freek Mencke uses to distribute his software. The name Meteor for this
        component was chosen because of it's link to space, like CodeComet.</p>
    </div>
  </div>
  <div card--actions>
    <mtr-btn flat>Learn more</mtr-btn>
  </div>
</mtr-card>`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
