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
  peopleArray: Array<string>;
  showConfirmation: boolean;

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

    this.rsvpForm.valueChanges.subscribe(val => {
      this.peopleArray = this.rsvpForm.value.people.map(v => v.name).filter(v => v);
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
    if (this.peopleArray.length > 0) {
      const listOfPeople = this.peopleArray.join(', ');
      this.mailService.send(listOfPeople).subscribe(res => {
        console.log('sending RSVP', res);
      });
      this.showConfirmation = true;
    }
  }
}
