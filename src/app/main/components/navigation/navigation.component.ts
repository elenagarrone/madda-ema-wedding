import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  links = [
    {
      isHome: true,
      text: 'Matrimonio',
      href: '#matrimonio-section',
      pageScroll: true
    },
    {
      text: 'Lista viaggio',
      href: '#lista-viaggio-section',
      pageScroll: true
    }
  ];
  links$: BehaviorSubject<any> = new BehaviorSubject(this.links);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        const url = (event as NavigationStart).url;
        if (url === '/dettagli-lista-viaggio') {
          this.links$.next([
            {
              isHome: true,
              text: 'Matrimonio',
              href: '/',
              fragment: 'matrimonio-section',
              pageScroll: false
            },
            {
              text: 'Come partecipare',
              href: '#come-partecipare-section',
              pageScroll: true
            }
          ])
        } else {
          this.links$.next(this.links);
        }
    })
  }
}
