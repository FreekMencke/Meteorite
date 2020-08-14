import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../../core/formatting/prism.service';

@Component({
  selector: 'mit-button-docs',
  templateUrl: './button-docs.component.html',
  styleUrls: ['./button-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDocsComponent implements AfterViewInit {

  codeExampleNormal: string = `
<mtr-btn>LEARN MORE</mtr-btn>
<mtr-btn secondary>LEARN MORE</mtr-btn>
<mtr-btn tertiary>LEARN MORE</mtr-btn>
<mtr-btn dark>LEARN MORE</mtr-btn>
<mtr-btn light>LEARN MORE</mtr-btn>
<mtr-btn black>LEARN MORE</mtr-btn>
<mtr-btn white>LEARN MORE</mtr-btn>
`.trim();
  codeExampleNormalClass: string = `
<mtr-btn>LEARN MORE</mtr-btn>
<mtr-btn class="secondary">LEARN MORE</mtr-btn>
<mtr-btn class="tertiary">LEARN MORE</mtr-btn>
<mtr-btn class="dark">LEARN MORE</mtr-btn>
<mtr-btn class="light">LEARN MORE</mtr-btn>
<mtr-btn class="black">LEARN MORE</mtr-btn>
<mtr-btn class="white">LEARN MORE</mtr-btn>
`.trim();

  codeExampleOutline: string = `
<mtr-btn outline>LEARN MORE</mtr-btn>
<mtr-btn secondary outline>LEARN MORE</mtr-btn>
<mtr-btn tertiary outline>LEARN MORE</mtr-btn>
<mtr-btn dark outline>LEARN MORE</mtr-btn>
<mtr-btn light outline>LEARN MORE</mtr-btn>
<mtr-btn black outline>LEARN MORE</mtr-btn>
<mtr-btn white outline>LEARN MORE</mtr-btn>
`.trim();
  codeExampleOutlineClass: string = `
<mtr-btn class="outline">LEARN MORE</mtr-btn>
<mtr-btn class="secondary outline">LEARN MORE</mtr-btn>
<mtr-btn class="tertiary outline">LEARN MORE</mtr-btn>
<mtr-btn class="dark outline">LEARN MORE</mtr-btn>
<mtr-btn class="light outline">LEARN MORE</mtr-btn>
<mtr-btn class="black outline">LEARN MORE</mtr-btn>
<mtr-btn class="white outline">LEARN MORE</mtr-btn>
`.trim();

  codeExampleFlat: string = `
<mtr-btn flat>LEARN MORE</mtr-btn>
<mtr-btn secondary flat>LEARN MORE</mtr-btn>
<mtr-btn tertiary flat>LEARN MORE</mtr-btn>
<mtr-btn dark flat>LEARN MORE</mtr-btn>
<mtr-btn light flat>LEARN MORE</mtr-btn>
<mtr-btn black flat>LEARN MORE</mtr-btn>
<mtr-btn white flat>LEARN MORE</mtr-btn>
`.trim();
  codeExampleFlatClass: string = `
<mtr-btn class="flat">LEARN MORE</mtr-btn>
<mtr-btn class="secondary flat">LEARN MORE</mtr-btn>
<mtr-btn class="tertiary flat">LEARN MORE</mtr-btn>
<mtr-btn class="dark flat">LEARN MORE</mtr-btn>
<mtr-btn class="light flat">LEARN MORE</mtr-btn>
<mtr-btn class="black flat">LEARN MORE</mtr-btn>
<mtr-btn class="white flat">LEARN MORE</mtr-btn>
`.trim();

  constructor(
    private prismService: PrismService,
  ) { }

  ngAfterViewInit(): void {
    this.prismService.highlightAll();
  }

}
