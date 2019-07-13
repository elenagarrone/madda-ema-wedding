import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sr = new ScrollReveal();

    sr.reveal('.js--fadeInBottom', {
      origin: 'bottom',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }
}
