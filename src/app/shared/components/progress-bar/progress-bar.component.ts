import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() backgroundColor = '';
    @Input() class = '';
    @Input() foregroundColor = '';
    @Input() text = '';
    @Input() total = 0;
    @Input() value = 0;

    constructor() { }

    ngOnInit(): void {
    }
}
