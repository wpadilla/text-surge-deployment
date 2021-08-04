import { Component, OnInit } from '@angular/core';
import { ICampaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { campaignMock } from '../../../../utils/mock';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';
import { popInAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    popInAnimation,
  ]
})
export class DashboardComponent implements OnInit {
  public campaigns: ICampaign[] = campaignMock;
  public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
  filterByProperties: IPropertyLabel[] = filterByPropertiesData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
