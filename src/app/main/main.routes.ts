import { Routes } from '@angular/router';

import { DettagliListaViaggioComponent } from './containers/dettagli-lista-viaggio/dettagli-lista-viaggio.component';
import { HomepageComponent } from './containers/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dettagli-lista-viaggio', component: DettagliListaViaggioComponent },
];
