import { Routes } from '@angular/router';

import { MainComponent } from "./main.component";
import { DettagliListaViaggioComponent } from "./containers/dettagli-lista-viaggio/dettagli-lista-viaggio.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dettagli-lista-viaggio', component: DettagliListaViaggioComponent }
];