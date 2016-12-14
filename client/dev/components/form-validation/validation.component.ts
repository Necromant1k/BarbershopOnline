import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'form-validation',
  templateUrl: 'validation.component.html'
})
export class FormValidationComponent {
  complexForm : FormGroup;
  myDatePickerOptions = {
    dayLabels:{su: 'В', mo: 'П', tu: 'В', we: 'С', th: 'Ч', fr: 'П', sa: 'С'},
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'mo',
    showTodayBtn: false,
    editableMonthAndYear: false
  };

  constructor(fb: FormBuilder){
    let EMAIL_REGEXP = /^[^@]+@([^@\.]+\.)+[^@\.]+$/i;
    this.complexForm = fb.group({
      'firstName' : ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'service': [null, Validators.required],
      'time': [null, Validators.required]
    });

    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }
  onDateChanged(event:any) {
    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  }
  submitForm(value: any){
    console.log(value);
    this.complexForm.reset();
  }
}
