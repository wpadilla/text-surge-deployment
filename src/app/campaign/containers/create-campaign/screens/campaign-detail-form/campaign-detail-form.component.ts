import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss']
})
export class CampaignDetailFormComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              public activatedRoute: ActivatedRoute,
  ) { }

  public form: FormGroup = new FormGroup({});
  filteredClients: any[] = [];
  filteredTimezones: any[] = [];

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe( data => {
      if (!!data.draft) {
        this.form.setValue({
          name: 'MyName@hight.com',
          clientId: { id: 0, name: 'VA Dems'},
          description: 'Description',
          endDate: new Date('10/10/1999'),
          totalBudget: 10,
          sendRate: 0.20,
          replyRate: 0.10,
          startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
          endTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
          timezone: { id: 0, name: 'UTC'},
        });
      }
    });

  }

  submitForm(): void {
    if (this.form.status === 'VALID') {
      this.router.navigate(['main/campaign/create/contacts']);
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


