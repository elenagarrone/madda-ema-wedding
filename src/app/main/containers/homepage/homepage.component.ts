import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
      private router: Router,
      private pageScrollService: PageScrollService,
      @Inject(DOCUMENT) private document: any
    ) {}

  ngOnInit() {
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '#' + tree.fragment,
          });
        }
      }
    });
  }

}
