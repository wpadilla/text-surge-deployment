import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICampaign, StatusTypes } from 'src/app/core/interfaces';
import { fadeAnimation } from '../../animations';
import { Router } from "@angular/router";

@Component({
  selector: 'ts-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class CampaignPanelComponent implements OnInit {
  @Output() click: EventEmitter<ICampaign> = new EventEmitter<ICampaign>();
  @Input() class = '';
  @Input() assignmentMode?: boolean;
  @Input() model: ICampaign = {} as ICampaign;
  statusTypes: {[N in string] : StatusTypes } = {
    'in progress': 'info',
    draft: 'danger',
    completed: 'success',
    'unassigned contacts': 'danger',
    'not started': 'disabled',
  };
  completed = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkCompleteStatus();
  }

  checkCompleteStatus(): void {
    this.completed = this.model.tags.indexOf('completed') > -1;
  }

  getPercentColor(total: number, value: number): string {
    return Math.ceil((value * 100) / total) > 49 ? '#003399' : '#ffaa00';
  }


  selectCampaign(): void {
    if (this.model.tags && this.model.tags.indexOf('draft') > -1) {
      this.router.navigate([`main/campaign/create/details/${this.model.id}`]);
    } else if (this.model.tags.indexOf('completed') > -1){
      this.router.navigate([`main/campaign/view/4`]);
    } else {
      this.router.navigate([`main/campaign/view/${this.model.id}`]);
    }
  }
}
