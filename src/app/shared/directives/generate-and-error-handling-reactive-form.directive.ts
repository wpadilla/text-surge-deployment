import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

export type ValidatorTypes = Exclude<keyof typeof Validators | 'minlength'
| 'maxlength', 'prototype'>;


/* tsValidateFormControl: generate a formGroup according the formControls found and validate them
according to the validators found in each element.
* */
@Directive({
  selector: '[generateAndErrorHandlingReactiveForm]',
})
export class GenerateAndErrorHandlingReactiveForm implements OnInit {

  @Input() generateAndErrorHandlingReactiveForm: FormGroup = new FormGroup({});
  validatorTypes: ValidatorTypes[] = [
    'required',
    'min',
    'max',
    'minlength',
    'maxlength',
    'pattern',
    'email',
    'nullValidator',
    'email',
  ];
  lastFormsValues: any = {};
  blurredControls: any = {};

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
        const validatorValue = controlElement.getAttribute(validatorType) || controlElement.getAttribute(validatorType.toLocaleLowerCase());
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
              case 'maxlength':
                validators.push(Validators.maxLength(Number(validatorValue)));
                break;
              case 'minlength':
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
      this.generateAndErrorHandlingReactiveForm.addControl(controlName, new FormControl(controlValue, []));
    });
    this.generateAndErrorHandlingReactiveForm.valueChanges.subscribe((formValues) =>  {
      this.handlingPaintErrorMessage(formValues);
      console.log('hola mundo', formValues);
      this.removeSolvedErrorMessages(formValues);
    });
  }

    /* handlingPaintErrorMessage: handle when and how paint the controls errors
    * @params: formValues, the new formValues loaded
    * */
    handlingPaintErrorMessage(formValues: any): void {

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
              case 'maxlength':
                errorMessage = 'max length error';
                break;
              case 'minlength':
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

            this.paintErrorMessageOnBlur(controlElement, errorMessage, updatedControlName, errorType, formValues);
          });
        }

      }

      // refreshing lastFormsValues
      this.lastFormsValues = formValues;
    }

    /* paintErrorMessage: paint error message,
    * @params controlElement: element to insert the error message;
    * @params errorMessage;
    * @params errorMessageClass: created custom class for that error in that specific control
    *  */
    paintErrorMessage(controlElement: Element, errorMessage: string, errorMessageClass: string): void {
      const pElement = document.createElement('p');
      pElement.setAttribute('data-error-message', errorMessage);
      pElement.classList.add(`error-message`);
      pElement.classList.add(errorMessageClass);
      // placing error message after the control.
      controlElement.insertAdjacentElement('afterend', pElement);
    }

    // paint Error message on input blur element
    paintErrorMessageOnBlur(controlElement: Element, errorMessage: string, controlName: string, errorType: string, formValues: any): void {
      const errorMessageClass = this.getCustomErrorMessageClass(controlName, errorType);
      if (document.querySelector(`.${errorMessageClass}`)) { return; }
      // to set a control was blurred;
      const setBlured = () => {
        this.blurredControls = {
          ...this.blurredControls,
          [controlName]: true,
        };
      };

      const controlIsBlured = this.blurredControls[controlName];

      const paintError = () => {
        this.paintErrorMessage(
          controlElement,
          errorMessage,
          errorMessageClass
        );
        this.removeSolvedErrorMessages(formValues);
      };

      const onBlur =  () => {
        paintError();
        setBlured();
      };

      // if the control element can be blurred we don't need blur with child input element
      if ((controlElement instanceof HTMLTextAreaElement || controlElement instanceof HTMLInputElement) && !controlIsBlured) {
        controlElement.addEventListener('blur', onBlur);
      } else {
        controlElement.removeEventListener('blur', onBlur);
        const input = controlElement.querySelector('input');
        if (input && !controlIsBlured) {
          input.addEventListener('blur', onBlur);
          // just when not input to blurred a default behavior
        } else if (input) {
          input.removeEventListener('blur', onBlur);
          paintError();
        } else {
          paintError();
        }
      }
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
      const control = this.generateAndErrorHandlingReactiveForm.controls[controlName];
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
            if(control.errors) {
            }
          });

      });
    }
}
