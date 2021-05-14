import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss']
})
export class CampaignDetailFormComponent implements OnInit {

  constructor() { }

  public form?: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(3)]),
      clientId: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      endDate: new FormControl('', [Validators.required]),
      totalBudget: new FormControl(0, [Validators.required, Validators.min(1)]),
      sendRate: new FormControl(0, [Validators.required, Validators.min(1)]),
      replyRate: new FormControl(0, [Validators.required, Validators.min(1)]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
    });
  }

  submitForm(): void {
      console.log('data', this.form);
  }

}
