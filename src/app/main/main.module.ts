import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faHome, faInfoCircle, faMapMarkedAlt, faMapMarkerAlt, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from './main.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { MatrimonioComponent } from './components/matrimonio/matrimonio.component';
import { ListaViaggioComponent } from './components/lista-viaggio/lista-viaggio.component';
import { DettagliListaViaggioComponent } from './containers/dettagli-lista-viaggio/dettagli-lista-viaggio.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InstagramComponent } from './components/instagram/instagram.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  NavigationComponent,
  BannerComponent,
  MatrimonioComponent,
  TabsComponent,
  ListaViaggioComponent,
  HomepageComponent,
  TimelineComponent,
  DettagliListaViaggioComponent,
  FooterComponent,
  RsvpComponent
];

@NgModule({
  declarations: [ ...components, InstagramComponent ],
  imports: [
    CommonModule,
    NgbTabsetModule,
    Ng2PageScrollModule,
    NgxPageScrollCoreModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [ ...components ]
})
export class MainModule {
  constructor() {
    library.add(faMapMarkedAlt, faMapMarkerAlt, faClock, faInfoCircle, faHome, faTimesCircle, faPlusCircle);
  }
}
