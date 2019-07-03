import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faMapMarkerAlt, faClock, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons';

import { routes } from './main.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { MatrimonioComponent } from './components/matrimonio/matrimonio.component';
import { ListaViaggioComponent } from './components/lista-viaggio/lista-viaggio.component';
import { DettagliListaViaggioComponent } from './containers/dettagli-lista-viaggio/dettagli-lista-viaggio.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const components = [
  NavigationComponent,
  BannerComponent,
  MatrimonioComponent,
  TabsComponent,
  ListaViaggioComponent,
  HomepageComponent,
  DettagliListaViaggioComponent,
  TimelineComponent
]

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
  ],
  exports: [ ...components ]
})
export class MainModule {
  constructor() {
    library.add(faMapMarkedAlt, faMapMarkerAlt, faClock, faInfoCircle, faHome)
  }
}
