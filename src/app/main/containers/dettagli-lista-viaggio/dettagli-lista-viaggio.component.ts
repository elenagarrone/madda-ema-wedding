import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-dettagli-lista-viaggio',
  templateUrl: './dettagli-lista-viaggio.component.html',
  styleUrls: ['./dettagli-lista-viaggio.component.scss']
})
export class DettagliListaViaggioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sr = new ScrollReveal();

    if (window.innerWidth >= 768) {
      sr.reveal('.js--fadeInBottom', {
        origin: 'bottom',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }
  }

}
