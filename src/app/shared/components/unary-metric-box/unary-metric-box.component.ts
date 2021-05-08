import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-unary-metric-box',
  templateUrl: './unary-metric-box.component.html',
  styleUrls: ['./unary-metric-box.component.scss']
})
export class UnaryMetricBoxComponent implements OnInit {
    @Input() class: string = '';
    @Input() title: string = '';
    @Input() value: string = '';

    constructor() { }

    ngOnInit(): void {
    }
}
