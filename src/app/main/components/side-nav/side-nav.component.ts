import { Component, OnInit } from '@angular/core';
import { horizontalSlideAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    horizontalSlideAnimation,
  ]
})
export class SideNavComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
