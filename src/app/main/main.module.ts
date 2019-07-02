import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

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
    Ng2PageScrollModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule {
  constructor() {
    library.add(faMapMarkedAlt, faMapMarkerAlt, faClock)
  }
}
