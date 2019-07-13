import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  rsvpForm: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rsvpForm = this.formBuilder.array([ this.addPerson() ])
  }
}
