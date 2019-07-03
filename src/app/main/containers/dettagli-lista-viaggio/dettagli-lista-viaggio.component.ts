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
    window.sr = ScrollReveal();

    if (window.innerWidth < 768) {
      const fadeInLeftEls = document.querySelectorAll('.timeline-content.js--fadeInLeft');
      if (fadeInLeftEls) {
        const timelineContentEls = document.querySelectorAll('.timeline-content');
        timelineContentEls.forEach(el => {
          el.classList.remove('js--fadeInLeft');
          el.classList.add('js--fadeInRight')
        });
      }

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    } else {        	
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
