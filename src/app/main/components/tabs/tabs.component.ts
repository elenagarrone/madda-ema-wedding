import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabs = [
    { 
      text: 'Cerimonia',
      panel: {
        imgSrc: '../../../../assets/images/chiesa.jpg',
        content: {
          heading: 'Dove e quando?',
          location: 'Chiesa',
          time: '9:00 - 10:30 Sabato',
          mapBtn: {
            text: 'Mappa',
            href: '#'
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
          location: 'Villa Torre',
          time: '9:00 - 10:30 Sabato',
          mapBtn: {
            text: 'Mappa',
            href: '#'
          }
        }
      }
    }
  ]

  activatePanel(evt) {

  }
}
