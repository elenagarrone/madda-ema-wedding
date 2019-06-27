import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { routes } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule { }
