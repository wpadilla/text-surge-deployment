import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICampaign } from '../../../core/interfaces';
import IClient from '../../../core/interfaces/client.interface';
import { clientMock } from '../../../../utils/mock/client.mock';
import { fadeAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class ClientViewComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  @Input() client: IClient = {} as any;
  tabActiveIndex = 0;

  tabNames = [
    'dashboard',
    'past-campaigns',
    'lists',
    'contacts',
    'messages',
  ];
  routes = {};
  campaign: ICampaign = {} as any;

  ngOnInit(): void {
    const {snapshot} = this.activatedRoute;
    if (snapshot.queryParams) {
      const tabIndex = this.tabNames.indexOf(this.activatedRoute.snapshot.queryParams.tab);
      this.tabActiveIndex = tabIndex !== -1 ? tabIndex : this.tabActiveIndex;
    }
    if (!this.client.id) {
      this.setSelectedClient();
    }
  }

  /* setSelectedClient, set the client according to the id received from route
 * */
  setSelectedClient(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    for (const client of clientMock) {
      if (client.id === id) {
        this.client = client;
        break;
      } else if (client.accounts && client.accounts.length) {
        const account = client.accounts.find(acc => acc.id === id) || {} as any;
        if (account.id) {
          this.client = account;
          break;
        }
      }
    }
    // if client doesn't exist redirect to client list
    if (!this.client.id) {
      this.router.navigate(['main/client']);
    }
  }

  onTabChange(value: any): void {
    if (value.index === 4) {
      this.router.navigate(['main/messaging/view']);
    }
  }
}
