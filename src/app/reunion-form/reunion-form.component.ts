import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { getMaxListeners } from 'process';
import { Reunion, ReunionClass } from '../model/reunion';
@Component({
  selector: 'app-reunion-form',
  templateUrl: './reunion-form.component.html',
  styleUrls: ['./reunion-form.component.css'],
})
export class ReunionFormComponent implements OnInit {
  reunionForm;
  eventFormGroup: FormGroup;
  eventObj;
  /*  model: Reunion = new ReunionClass(
    'john',
    'doe',
    'johndoe@gmail.com',
    12332123,
    true
  ); */

  /*  get attendingFormArray() {
    return this.reunionForm.controls.events as FormArray;
  } */

  // Form Array Method
  /* private addAttendingCheckboxes() {
    this.attendingData.forEach((data) =>
      this.attendingFormArray.push(new FormControl(false))
    );
  }
 */
  attendingData = [
    { id: 1, name: 'Friday night cook out' },
    { id: 2, name: 'Saturday breakfast' },
    { id: 3, name: 'Saturday Lunch' },
    { id: 4, name: 'Saturday formal dinner' },
  ];
  // Create an object that holds all FormControl for event
  private eventFormGroupCreator() {
    this.attendingData.forEach(
      (data) => (this.eventObj[data.name] = new FormControl(false))
    );
  }

  constructor(private fb: FormBuilder) {
    //Instantiate empty object and create the necessary form group using forEach
    this.eventObj = {};
    this.eventFormGroupCreator();

    console.log(this.eventObj);
    this.reunionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber1: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern(/[0-9]+/),
        ]),
      ],
      phoneNumber2: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern(/\d{3}/),
        ],
      ],
      phoneNumber3: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(/\d{4}/),
        ],
      ],
      dvd: ['true', Validators.required],
      guestFirstName: [''],
      // Create Form Group here
      events: this.fb.group(this.eventObj),
      guestLastName: [''],
      comments: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.reunionForm.value);
  }

  logError() {
    console.log(this.reunionForm.controls);
  }
}
