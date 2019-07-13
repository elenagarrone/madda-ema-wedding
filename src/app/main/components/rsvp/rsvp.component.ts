import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import ScrollReveal from 'scrollreveal';
import { MailService } from '../../mail-service/mail.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent implements OnInit {
  rsvpForm: FormGroup;

  constructor(
    private mailService: MailService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const sr = new ScrollReveal();

    sr.reveal('.js--fadeInBottom', {
      origin: 'bottom',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    this.rsvpForm = this.formBuilder.group({
      people: this.formBuilder.array([ this.formBuilder.group({ name: '' }) ]),
    });
  }

  get people() {
    return this.rsvpForm.get('people') as FormArray;
  }

  addPeople() {
    this.people.push(this.formBuilder.group({ name: '' }));
  }

  deletePeople(index) {
    this.people.removeAt(index);
  }

  submitForm(): void {
    this.mailService.send(this.rsvpForm.value)
      .subscribe(
        res => {
          console.log(res);
        }
      );
    setTimeout(function() {
      alert('Email sent!');
    }, 1000);
  }
}
