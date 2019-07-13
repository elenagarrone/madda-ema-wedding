import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  @Input() selectedIndex = 0;

  tabs = [
    {
      text: 'Cerimonia',
      panel: {
        imgSrc: '../../../../assets/images/chiesa.jpg',
        content: {
          heading: 'Dove e quando?',
          location: 'Parrocchia di San Giovanni Battista, Via Stefano Prasca, 64, 16148 Genova',
          time: 'Ore 16, 28 Settembre 2019',
          mapBtn: {
            text: 'Mappa',
            href: 'https://goo.gl/maps/6ALaZu9ShTUdBm1R9'
          }
        }
      }
    },
    {
      text: 'Ricevimento',
      panel: {
        imgSrc: '../../../../assets/images/villa-torre.jpg',
        content: {
          heading: 'Dove e quando?',
          location: 'Palazzo della Torre, Via Romana di Quarto, 103, 16148 Genova',
          time: 'Dopo la cerimonia',
          mapBtn: {
            text: 'Mappa',
            href: 'https://goo.gl/maps/J6wN3Ts7y1vdVdC76'
          },
          info: 'E\' presente un parcheggio all\'interno della Villa. E\' possibile accedervi e parcheggiare auto o moto già prima della cerimonia in chiesa.'
        }
      }
    }
  ];

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
