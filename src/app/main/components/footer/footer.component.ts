import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
