import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatrimonioComponent } from './containers/matrimonio/matrimonio.component';
import { TabsComponent } from './components/tabs/tabs.component';

const components = [ MainComponent, NavigationComponent, BannerComponent, MatrimonioComponent, TabsComponent ]

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    NgbTabsetModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule { }
