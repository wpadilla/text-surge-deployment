import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss']
})
export class CampaignDetailFormComponent implements OnInit {

  constructor() { }

  public form: FormGroup = new FormGroup({});
  name: any = '';
  ngOnInit(): void {
    // this.form.valueChanges.subscribe(values => {
    //   const name = this.form.controls.name || {} as any;
    //   console.log(this.form);
    //
    // });

  }

  validateFormErrors() {
    Object.keys(this.form.controls).forEach(controlKey => {
      const el = document.getElementsByName(controlKey);
      console.log('element', el, controlKey);
      const control = this.form.controls[controlKey];
      const errorTypes = ['required', 'min', 'max', 'minLength'];
      errorTypes.forEach(errorType => {
        if (control.errors && control.errors[errorType]) {
          el[0].append(`<span> Error occurred </span>`);
        }
      });
    });
  }

  submitForm(): void {
    console.log('data', this.form);
  }

}
