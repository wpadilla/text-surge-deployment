import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

export type ValidatorTypes = Exclude<keyof typeof Validators, 'prototype'>;


/* tsValidateFormControl: generate a formGroup according the formControls found and validate them
according to the validators found in each element.
* */
@Directive({
  selector: '[tsValidateFormControl]',
})
export class ValidateFormControl implements OnInit {

  @Input() tsValidateFormControl: FormGroup = new FormGroup({});
  validatorTypes: ValidatorTypes[] = [
    'required',
    'min',
    'max',
    'minLength',
    'maxLength',
    'pattern',
    'email',
    'nullValidator',
    'email',
  ];
  lastFormsValues: any = {};

  constructor(private el: ElementRef<HTMLInputElement>) {
  }

  ngOnInit(): void {
    // getting all formControl elements
    const controls = Array.from(this.el.nativeElement.querySelectorAll('[formControlName]'));
    controls.forEach(controlElement => {
      // here we will store all Validators found in the formControl element
      const validators: any[] = [];
      const controlName = controlElement.getAttribute('formcontrolname') as string;
      const controlValue = controlElement.getAttribute('value') || '';

      this.validatorTypes.forEach(validatorType => {
        // verify if the validator type is found in the formControl element
        const validatorValue = controlElement.getAttribute(validatorType);
        const validatorEnabled = validatorValue !== null;

        if (validatorEnabled) {
          // exceptional case for required, email or nullValidator types
          if (validatorType === 'required' || validatorType === 'email' || validatorType === 'nullValidator') {
            validators.push(Validators[validatorType]);

          } else if (!!validatorValue) {
            // evaluate all validators type and set them in the validators array of the formControl element
            switch (validatorType) {
              case 'min':
                validators.push(Validators.min(Number(validatorValue)));
                break;
              case 'max':
                validators.push(Validators.max(Number(validatorValue)));
                break;
              case 'maxLength':
                validators.push(Validators.maxLength(Number(validatorValue)));
                break;
              case 'minLength':
                validators.push(Validators.minLength(Number(validatorValue)));
                break;
              case 'pattern':
                validators.push(Validators.pattern(validatorValue));
                break;
              default:
                break;
            }
          }
        }
      });
      this.tsValidateFormControl.addControl(controlName, new FormControl(controlValue, []));
    });
    this.tsValidateFormControl.valueChanges.subscribe((formValues) =>  {
      this.paintErrorMessage(formValues);
      this.removeSolvedErrorMessages(formValues);
    });
  }

    /* paintErrorMessage: paint the controls errors
    * @params: formValues, the new formValues loaded
    * */
    paintErrorMessage(formValues: any): void {

      const updatedControlName = this.getUpdatedControlName(formValues);
      if (updatedControlName) {
        const { control, controlElement } = this.getControlAndControlElement(updatedControlName);
        if (control.errors) {
          if (!controlElement) { return; }
          Object.keys(control.errors).forEach(errorType => {
            // evaluate all error type and paint the correct error message
            let errorMessage = '';
            switch (errorType) {
              case 'required':
                errorMessage = 'required error';
                break;
              case 'min':
                errorMessage = 'min error';
                break;
              case 'max':
                errorMessage = 'max error';
                break;
              case 'maxLength':
                errorMessage = 'max length error';
                break;
              case 'minLength':
                errorMessage = 'min length error';
                break;
              case 'pattern':
                errorMessage = 'pattern error';
                break;
              case 'email':
                errorMessage = 'email error';
                break;
              default:
                break;
            }

            const errorMessageClass = this.getCustomErrorMessageClass(updatedControlName, errorType);
            if (controlElement.querySelector(`.${errorMessageClass}`)) { return; }
            const pElement = document.createElement('p');
            const text = document.createTextNode(errorMessage);
            pElement.appendChild(text);
            pElement.classList.add(`error-message`);
            pElement.classList.add(errorMessageClass);
            controlElement.appendChild(pElement);
          });
        }

      }

      // refreshing lastFormsValues
      this.lastFormsValues = formValues;
    }

    /* getCustomErrorMessageClass: create a custom error message class
    * @params: prefix
    * * */
    getCustomErrorMessageClass(prefix: string, errorType: string): string {
      return `${prefix}-${errorType}-error-message`;
    }

    /* getControlAndControlElement: get control and html form control element,
    * @params: controlName, control name to find the control and the html element
    * * */
    getControlAndControlElement(controlName: string): { control: AbstractControl, controlElement: Element | null} {
      const control = this.tsValidateFormControl.controls[controlName];
      const controlElement = document.querySelector(`[formcontrolname=${controlName}]`);
      return {  control, controlElement };
    }

    /*getUpdatedControlName: get the key of the control which was updated in the form
    * @params: formValues, the new formValues loaded
    * */
    getUpdatedControlName(formValues: any): string | void {
      for (const key of Object.keys(this.lastFormsValues)) {
        if (this.lastFormsValues[key] !== formValues[key]) {
          return key as string;
        }
      }
    }

    /* removeSolvedErrorMessages: remove all errors messages painted when error is solved
    * @params: formValues, to get all control keys
    * */
    removeSolvedErrorMessages(formValues: any): void {
      Object.keys(formValues).forEach(controlName => {
        const { control } = this.getControlAndControlElement(controlName);
        this.validatorTypes.forEach(errorType => {
            if (control.errors && !control.errors[errorType]) {
              const errorMessageElement = document.getElementsByClassName(this.getCustomErrorMessageClass(controlName, errorType))[0];
              errorMessageElement && errorMessageElement.remove();
            } else if (!control.errors) {
              const errorMessageElement = document.getElementsByClassName(this.getCustomErrorMessageClass(controlName, errorType))[0];
              errorMessageElement && errorMessageElement.remove();
            }
          });

      });
    }
}
