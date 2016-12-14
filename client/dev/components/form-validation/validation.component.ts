import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'form-validation',
  templateUrl: 'validation.component.html'
})
export class FormValidationComponent {
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'date': ['', Validators.required],
      'time': ['', Validators.required]
    });
  }

  submitForm(value: any){
    console.log(value);
  }
}
