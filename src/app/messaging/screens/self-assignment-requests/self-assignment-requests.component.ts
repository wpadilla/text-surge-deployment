import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import { IPropertyLabel } from '../../../core/interfaces';
import { selfAssignmentsRequestMock } from '../../../../utils/mock/support-requests.mock';
import ISupportRequest from '../../../core/interfaces/support-request.interface';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';

@Component({
  selector: 'ts-self-assign-requests',
  templateUrl: './self-assignment-requests.component.html',
  styleUrls: ['./self-assignment-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class SelfAssignmentRequestsComponent implements OnInit {

  constructor() {
  }

  filterByProperties: IPropertyLabel[] = [
    {
      property: 'user.firstName',
      label: 'Client'
    }
  ];
  sortByProperties: ISortBy[] = [
    {
      property: 'requestTime',
      label: 'Time Stamp',
      reversed: true,
    },
    {
      property: 'user.firstName',
      label: 'Texter Name'
    },
    {
      property: 'campaign.description',
      label: 'Campaign Name'
    }
  ];
  selfAssignmentsRequests = selfAssignmentsRequestMock;
  filteredSelfAssignmentsRequests: ISupportRequest[] = [];

  ngOnInit(): void {

  }
  setSelfAssignmentRequestsData(data: ISupportRequest[]): void {
    this.filteredSelfAssignmentsRequests = data;
  }
}
