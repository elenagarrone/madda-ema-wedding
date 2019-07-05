import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-lista-viaggio',
  templateUrl: './lista-viaggio.component.html',
  styleUrls: ['./lista-viaggio.component.scss']
})
export class ListaViaggioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sr = new ScrollReveal();

    if (window.innerWidth >= 768) {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }
  }
}

