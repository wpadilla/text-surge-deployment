import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { verticalSlideAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [
    verticalSlideAnimation,
  ]
})
export class TopBarComponent implements OnInit {
    constructor() { }
    userProfileImg = 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg';
    public ngOnInit() {

    }
}
