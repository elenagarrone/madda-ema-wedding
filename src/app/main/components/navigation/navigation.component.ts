import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  links = [
    {
      text: 'Matrimonio',
      href: '#matrimonio-section'
    },
    {
      text: 'Lista viaggio',
      href: '#lista-viaggio-section'
    }
  ]
}
