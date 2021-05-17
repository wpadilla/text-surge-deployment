import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss']
})
export class CampaignDetailFormComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  public form: FormGroup = new FormGroup({});
  filteredClients: any[] = [];
  filteredTimezones: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.form.setValue({
      name: 'MyName@hight.com',
      clientId: { id: 0, name: 'Select a Client'},
      description: 'Description',
      endDate: new Date('10/10/1999'),
      totalBudget: 10,
      sendRate: 0.20,
      replyRate: 0.10,
      startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      endTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      timezone: { id: 0, name: 'Select a timezone'},
    });
    console.log('element init');
  }

  submitForm(): void {
    if (this.form.status === 'VALID') {
      this.router.navigate(['main/campaign/create/example1']);
    }
    console.log(this.form.value);
  }

  filterClients(selected: any): void {
    this.filteredClients = [{
      name: 'Va Game',
      id: 1,
    },
      {
        name: 'Second Client',
        id: 2,
      },
      {
        name: 'Third Client',
        id: 3,
      }, ];
  }

  filterTimezones(selected: any): void {
    this.filteredTimezones = [{
      name: 'NA STH',
      id: 1,
    },
      {
        name: 'NT MTO',
        id: 2,
      },
      {
        name: 'LU PH',
        id: 3,
      }, ];
  }
}


