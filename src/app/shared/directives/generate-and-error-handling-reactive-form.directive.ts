import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from "@angular/common";

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
  @Input() container?: HTMLFormElement;

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

  constructor(
    private el: ElementRef<HTMLInputElement>,
    @Inject(DOCUMENT) private document: Document,
  ) {
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
      this.generateAndErrorHandlingReactiveForm.addControl(controlName, new FormControl('', []));
    });

    // validate all form on submit only if container parameter was passed
    if (this.container) {
      this.container.addEventListener('submit', (el) => {
        Object.keys(this.generateAndErrorHandlingReactiveForm.value).forEach(nameControl => {
          this.handlingPaintErrorMessage(this.generateAndErrorHandlingReactiveForm.value, nameControl, false);
        });
      });
    }


    this.generateAndErrorHandlingReactiveForm.valueChanges.subscribe((formValues) =>  {
      this.handlingPaintErrorMessage(formValues);
      this.removeSolvedErrorMessages(formValues);
    });
  }

    /* handlingPaintErrorMessage: handle when and how paint the controls errors
    * @params: formValues, the new formValues loaded
    * */
    handlingPaintErrorMessage(formValues: any, strictControlName?: string, handleOnBlur: boolean = true): void {

      const updatedControlName = strictControlName || this.getUpdatedControlName(formValues);
      if (updatedControlName) {
        const { control, controlElement } = this.getControlAndControlElement(updatedControlName);
        const labelComponent = controlElement && (controlElement as any).parentElement.querySelector('label');
        let label = '';
        if (labelComponent) {
          label = labelComponent.innerText ? labelComponent.innerText.replace(':', '') : '';
        }
        if (control.errors) {
          if (!controlElement) { return; }
          Object.keys(control.errors).forEach(errorType => {
            const validatorValue = controlElement && controlElement.getAttribute(errorType);

            // evaluate all error type and paint the correct error message
            let errorMessage = '';
            switch (errorType) {
              case 'required':
                errorMessage = `${label} is required`;
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
                errorMessage = `${label} need at least ${validatorValue} characteres`;
                break;
              case 'pattern':
                errorMessage = `Incorrect format for ${label}`;
                break;
              case 'email':
                errorMessage = `${label} is not correct`;

                break;
              default:
                break;
            }

            if (handleOnBlur) {
              this.paintErrorMessageOnBlur(controlElement, errorMessage, updatedControlName, errorType, formValues);
            } else {
              const errorMessageClass = this.getCustomErrorMessageClass(updatedControlName, errorType);
              if (this.isErrrorMessagePainted(errorMessageClass)) { return; }
              this.paintErrorMessage(
                controlElement,
                errorMessage,
                errorMessageClass
              );
            }
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
      const pElement = this.document.createElement('p');
      pElement.setAttribute('data-error-message', errorMessage);
      pElement.classList.add(`error-message`);
      pElement.classList.add(errorMessageClass);
      // placing error message after the control.
      controlElement.insertAdjacentElement('afterend', pElement);
      this.addErrorClass(controlElement);

    }

    isErrrorMessagePainted(errorMessageClass: string): boolean {
      return !!this.document.querySelector(`.${errorMessageClass}`);
    }
    // paint Error message on input blur element
    paintErrorMessageOnBlur(controlElement: Element, errorMessage: string, controlName: string, errorType: string, formValues: any): void {
      const errorMessageClass = this.getCustomErrorMessageClass(controlName, errorType);
      if (this.isErrrorMessagePainted(errorMessageClass)) { return; }
      // to set a control was blurred;
      const setBlured = () => {
        this.blurredControls = {
          ...this.blurredControls,
          [controlName]: true,
        };
      };

      const controlIsBlured = this.blurredControls[controlName];

      const paintError = () => {
        if (this.isErrrorMessagePainted(errorMessageClass)) { return; }
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
      const controlElement = this.document.querySelector(`[formcontrolname=${controlName}]`);
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
        const { control, controlElement } = this.getControlAndControlElement(controlName);
        this.validatorTypes.forEach(errorType => {
            if (control.errors && !control.errors[errorType]) {
              const errorMessageElement = this.document.getElementsByClassName(this.getCustomErrorMessageClass(controlName, errorType))[0];
              errorMessageElement && errorMessageElement.remove();
              this.removeErrorClassList(controlElement);
            } else if (!control.errors) {
              const errorMessageElement = this.document.getElementsByClassName(this.getCustomErrorMessageClass(controlName, errorType))[0];
              errorMessageElement && errorMessageElement.remove();
              this.removeErrorClassList(controlElement);
            }
          });

      });
    }

    removeErrorClassList(controlElement: Element | null): void {
      if (controlElement) {
        if (controlElement.children && controlElement.children[0]) {
          controlElement.children[0].classList.remove('control-error');
        } else {
          controlElement.classList.remove('control-error');
        }
      }
    }

  addErrorClass(controlElement?: Element): void {
      if (controlElement) {
        if (controlElement.children && controlElement.children[0]) {
          controlElement.children[0].classList.add('control-error');
        } else {
          controlElement.classList.add('control-error');
        }
      }
    }
}
