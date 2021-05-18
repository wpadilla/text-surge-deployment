import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICampaign } from 'src/app/core/interfaces';

@Component({
  selector: 'ts-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss']
})
export class CampaignPanelComponent implements OnInit {
    @Input() class: string = '';
    @Input() model: ICampaign = {} as ICampaign;
    completed = false;
    constructor() { }

    ngOnInit(): void {
      this.checkCompleteStatus();
    }

    checkCompleteStatus(): void {
      this.completed = this.model.tags.indexOf('completed') > -1;
    }
}
