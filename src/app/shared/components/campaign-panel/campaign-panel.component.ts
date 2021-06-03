import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICampaign } from 'src/app/core/interfaces';
import { StatusTypes } from "../button-label/button-label.component";

@Component({
  selector: 'ts-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss']
})
export class CampaignPanelComponent implements OnInit {
  @Output() click: EventEmitter<ICampaign> = new EventEmitter<ICampaign>();
  @Input() class = '';
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
}
