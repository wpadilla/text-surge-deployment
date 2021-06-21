import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { popInAnimation } from '../../animations';

@Component({
  selector: 'ts-unary-metric-box',
  templateUrl: './unary-metric-box.component.html',
  styleUrls: ['./unary-metric-box.component.scss'],
  animations: [
    popInAnimation,
  ]
})
export class UnaryMetricBoxComponent implements OnInit, OnDestroy {
  static delay = 0;

  @Input() class = '';
  @Input() title = '';
  @Input() value = '';
  popInDelay = '0s';

  constructor() {
  }

  ngOnInit(): void {
    UnaryMetricBoxComponent.delay += 1;
    this.popInDelay = `.${UnaryMetricBoxComponent.delay}s`;
    console.log(document.getElementsByTagName('ts-unary-metric-box'));
  }

  ngOnDestroy(): void {
    UnaryMetricBoxComponent.delay = 0;
  }
}
