import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteorHeaderModule } from 'meteor';
import { HeaderComponent } from './mit-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MeteorHeaderModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule { }
