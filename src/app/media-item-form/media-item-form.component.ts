import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
    @Inject('lookupListToken') public lookupLists: any
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+'),
        ])
      ),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control(''),
    });
  }
  onMediaFormSubmit(mediaItem: any) {
    console.log(mediaItem);
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null as any;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null as any;
    } else {
      return { year: true };
    }
  }
}
