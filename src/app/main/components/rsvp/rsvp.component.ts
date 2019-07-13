import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent implements OnInit {
  rsvpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
}
