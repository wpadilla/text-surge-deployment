import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Campaign } from 'src/app/core/interfaces';

@Component({
  selector: 'ts-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss']
})
export class CampaignPanelComponent implements OnInit {
    @Input() class: string = '';
    @Input() model: Campaign = {} as Campaign;

    constructor() { }

    ngOnInit(): void {
    }
}
