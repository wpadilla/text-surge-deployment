import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICampaign, StatusTypes } from 'src/app/core/interfaces';
import { fadeAnimation } from '../../animations';

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
  constructor() {
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
}
