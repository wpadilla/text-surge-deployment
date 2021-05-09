import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() backgroundColor: string = '';
    @Input() class: string = '';
    @Input() foregroundColor: string = '';
    @Input() text: string = '';
    @Input() total: number = 0;
    @Input() value: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    public getPct(): number {
        if (!this.total) {
            return 0;
        }
        return Math.floor(this.value * 100 / this.total);
    }
}
