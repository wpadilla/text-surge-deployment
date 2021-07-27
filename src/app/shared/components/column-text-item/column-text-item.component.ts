import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { horizontalSlideAnimation } from '../../animations';

@Component({
  selector: 'ts-column-text-item',
  templateUrl: './column-text-item.component.html',
  styleUrls: ['./column-text-item.component.scss'],
  animations: [
    horizontalSlideAnimation,
  ]
})
export class ColumnTextItemComponent implements OnInit, OnDestroy {
  static delay = 0;

  @Input() label = '';
  @Input() labelClass = '';
  @Input() text = '';
  @Input() textClass = '';
  @Input() disableBorder?: boolean;
  @Input() disablePaddingLeft?: boolean;
  @Input() disablePaddingRight?: boolean;
  horizontalSlideDelay = '0s';

  constructor() {
  }

  ngOnInit(): void {
    ColumnTextItemComponent.delay += 1;
    this.horizontalSlideDelay = `.${ColumnTextItemComponent.delay ? ColumnTextItemComponent.delay + 1 : 0 }s`;
  }

  ngOnDestroy(): void {
    ColumnTextItemComponent.delay = 0;
  }
}
