import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  form: FormGroup = this.fb.group({
    title: this.fb.control(123123),
    number: this.fb.control(2),
  });

  constructor(private fb: FormBuilder) {}

  get getTitleControl(): FormControl{
    return this.form.get('title') as FormControl
  }

}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
