import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import keyboardFocus from 'keyboard-focus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'madda-ema-wedding';

  constructor(
    private http: HttpClient
  ) {
    keyboardFocus(document);
    setInterval(function() {
      http.get('https://madda-ema-wedding.herokuapp.com');
    }, 300000); // every 5 minutes (300000)
  }
}
