import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  template: string;
  currentPos = 1;
  public pos: any = new BehaviorSubject(this.currentPos);

  constructor(public http: HttpClient) {
    this.template = 'Ciao!\r\n\r\n hai nuovi RSVP: [PERSONE].';
  }

  send(people: string) {
    const body = this.template.replace('[PERSONE]', people);
    return this.http.post('/api/post', {sender: 'elenagarrone.dev@gmail.com', subject: 'RSVP matrimonio', body: body});
  }
}
