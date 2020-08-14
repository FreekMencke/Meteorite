import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerDocsComponent } from './banner/banner-docs.component';
import { ButtonDocsComponent } from './button/button-docs.component';
import { CardDocsComponent } from './card/card-docs.component';
import { ContainerDocsComponent } from './container/container-docs.component';
import { DocsComponent } from './docs.component';
import { HeaderDocsComponent } from './header/header-docs.component';
import { SideMenuDocsComponent } from './side-menu/side-menu-docs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DocsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'banner' },
      { path: 'banner', component: BannerDocsComponent },
      { path: 'button', component: ButtonDocsComponent },
      { path: 'card', component: CardDocsComponent },
      { path: 'container', component: ContainerDocsComponent },
      { path: 'header', component: HeaderDocsComponent },
      { path: 'side-menu', component: SideMenuDocsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule { }
