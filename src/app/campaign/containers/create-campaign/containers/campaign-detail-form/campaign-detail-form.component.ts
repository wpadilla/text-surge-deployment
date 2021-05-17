import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss']
})
export class CampaignDetailFormComponent implements OnInit {

  constructor(private router: Router) { }

  public form: FormGroup = new FormGroup({});
  filteredCountries: any[] = [
    {
      name: 'str',
      id: 1,
    },
    {
      name: 'str',
      id: 2,
    },
    {
      name: 'str',
      id: 3,
    },
  ];

  defaultStartTime = new Date();
  defaultEndTime = new Date();

  ngOnInit(): void {

  }

  submitForm(): void {
    if (this.form.status === 'VALID') {
      this.router.navigate(['main/campaign/create/example1']);
    }
  }

  completeInnerMethod(ev: any): any[] {
    return [{ id: 1, name: 'Va Game' }];
  }
}


