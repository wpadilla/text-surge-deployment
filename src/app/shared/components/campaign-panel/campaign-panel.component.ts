import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss']
})
export class CampaignPanelComponent implements OnInit {
    @Input() class: string = '';

    constructor() { }

    ngOnInit(): void {
    }
}
