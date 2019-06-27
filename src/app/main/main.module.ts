import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { routes } from './main.routes';
import { NavigationComponent } from './components/navigation/navigation.component';

const components = [ MainComponent, NavigationComponent ]

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule { }
