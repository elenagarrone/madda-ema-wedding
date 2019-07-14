import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  template: string;

  constructor(public http: HttpClient) {
    this.template = 'Ciao Madda!\r\nhai nuovi RSVP per il matrimonio:\r\n\r\n[PERSONE].';
  }

  send(people: string) {
    const body = this.template.replace('[PERSONE]', people);
    return this.http.post('/api/post', {body: body});
  }
}
