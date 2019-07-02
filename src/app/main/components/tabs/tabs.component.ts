import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent {
  @Input() selectedIndex = 0;

  tabs = [
    { 
      text: 'Cerimonia',
      panel: {
        imgSrc: '../../../../assets/images/chiesa.jpg',
        content: {
          heading: 'Dove e quando?',
          location: 'Chiesa San Giovanni Battista, Via Stefano Prasca, 64, 16148 Genova',
          time: '9:00 - 10:30 Sabato lorem ipsum',
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
          time: '9:00 - 10:30 Sabato lorem ipsum',
          mapBtn: {
            text: 'Mappa',
            href: 'https://goo.gl/maps/J6wN3Ts7y1vdVdC76'
          },
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      }
    }
  ]
}