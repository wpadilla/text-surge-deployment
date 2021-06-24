import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { popInAnimation, verticalSlideAnimation } from '../../../../../shared/animations';

@Component({
  selector: 'ts-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    popInAnimation,
    verticalSlideAnimation,
  ]
})
export class MessageComponent implements OnInit, OnDestroy {
  static delay = 0;

  @Input() text = '';
  @Input() transmitter = '';
  @Input() date = new Date();
  @Input() wrapperClass = '';
  @Input() textClass = '';
  @Input() type: 'incoming' | 'outgoing' = 'outgoing';
  popInDelay = '0s';
  transmitterDelay = '0s';
  dateDelay = '0s';

  constructor() {
  }

  ngOnInit(): void {
    MessageComponent.delay += 1;
    this.popInDelay = `.${MessageComponent.delay}s`;
    this.transmitterDelay = `.${MessageComponent.delay + 1}s`;
    this.dateDelay = `.${MessageComponent.delay + 2}s`;

  }

  ngOnDestroy(): void {
    MessageComponent.delay = 0;
  }
}
