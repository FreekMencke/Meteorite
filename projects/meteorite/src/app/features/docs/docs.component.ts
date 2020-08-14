import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mit-docs',
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {

  readonly availableDocs: { path: string, text: string }[] = [
    { path: 'banner', text: 'Banner' },
    { path: 'button', text: 'Button' },
    { path: 'card', text: 'Card' },
    { path: 'container', text: 'Container' },
    { path: 'header', text: 'Header' },
    { path: 'side-menu', text: 'Side Menu' },
  ];

}
