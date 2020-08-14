import { NgModule } from '@angular/core';
import { MeteorBannerModule, MeteorButtonModule, MeteorCardModule, MeteorHeaderModule, MeteorSideMenuModule } from 'meteor';
import { SharedModule } from '../../shared/shared.module';
import { BannerDocsComponent } from './banner/banner-docs.component';
import { ButtonDocsComponent } from './button/button-docs.component';
import { CardDocsComponent } from './card/card-docs.component';
import { ContainerDocsComponent } from './container/container-docs.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { HeaderDocsComponent } from './header/header-docs.component';
import { SideMenuDocsComponent } from './side-menu/side-menu-docs.component';

@NgModule({
  imports: [
    SharedModule,
    DocsRoutingModule,
    MeteorBannerModule,
    MeteorButtonModule,
    MeteorCardModule,
    MeteorSideMenuModule,
    MeteorHeaderModule,
  ],
  declarations: [
    DocsComponent,
    BannerDocsComponent,
    ButtonDocsComponent,
    CardDocsComponent,
    ContainerDocsComponent,
    HeaderDocsComponent,
    SideMenuDocsComponent,
  ],
})
export class DocsModule { }
