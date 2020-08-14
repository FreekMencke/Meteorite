import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from './components/mit-header.module';
import { MeteorContainerModule } from 'meteor';

const MODULES = [
  CommonModule,
  HeaderModule,
  MeteorContainerModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule { }
