import { Injectable } from '@angular/core';

import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';

@Injectable({
  providedIn: 'root',
})
export class PrismService {

  highlightAll(): void {
    Prism.highlightAll();
  }

}
