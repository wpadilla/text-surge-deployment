import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Input() dashboardActive: boolean = true;
    @Input() campaignActive: boolean = false;
    @Input() clientActive: boolean = false;
    @Input() messageActive: boolean = false;
    @Input() listActive: boolean = false;
    @Input() userActive: boolean = false;
    @Input() settingActive: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
}
