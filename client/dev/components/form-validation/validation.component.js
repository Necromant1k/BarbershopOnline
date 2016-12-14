"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var FormValidationComponent = (function () {
    function FormValidationComponent(fb) {
        this.myDatePickerOptions = {
            dayLabels: { su: 'В', mo: 'П', tu: 'В', we: 'С', th: 'Ч', fr: 'П', sa: 'С' },
            dateFormat: 'dd-mm-yyyy',
            firstDayOfWeek: 'mo',
            showTodayBtn: false,
            editableMonthAndYear: false
        };
        var EMAIL_REGEXP = /^[^@]+@([^@\.]+\.)+[^@\.]+$/i;
        this.complexForm = fb.group({
            'firstName': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEXP)])],
            'email': ['', forms_1.Validators.required],
            'phone': ['', forms_1.Validators.required],
            'service': [null, forms_1.Validators.required],
            'time': [null, forms_1.Validators.required]
        });
        console.log(this.complexForm);
        this.complexForm.valueChanges.subscribe(function (form) {
            console.log('form changed to:', form);
        });
    }
    FormValidationComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    };
    FormValidationComponent.prototype.submitForm = function (value) {
        console.log(value);
        this.complexForm.reset();
    };
    FormValidationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-validation',
            templateUrl: 'validation.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormValidationComponent);
    return FormValidationComponent;
}());
exports.FormValidationComponent = FormValidationComponent;
