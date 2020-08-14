import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorButtonModule } from '../button';
import { MeteorHeaderComponent } from './mtr-header.component';

@NgModule({
  imports: [CommonModule, MeteorButtonModule],
  declarations: [MeteorHeaderComponent],
  exports: [MeteorHeaderComponent],
})
export class MeteorHeaderModule {}
