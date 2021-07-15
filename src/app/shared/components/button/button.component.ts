import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorTypes, SizeTypes } from '../../../core/interfaces/common.interface';
import { IconTypes, IIConSize } from '../../../core/interfaces/icon.interface';
import { popInAnimation } from '../../animations';

@Component({
  selector: 'ts-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    popInAnimation,
  ]
})
export class ButtonComponent implements OnInit {
  @Input() class: String = '';
  @Input() disabled?: boolean;
  @Input() rounded?: SizeTypes;
  @Input() type: String = 'button';
  @Input() mode: 'primary' | 'secondary' | 'normal' = 'primary';
  @Input() value: String = '';
  @Input() icon: IconTypes | string = '';
  @Input() iconColor?: ColorTypes;
  @Input() iconSize: SizeTypes = 'xs';
  @Input() customIconSize?: IIConSize;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get colorIcon(): string {
    if (this.iconColor) {
      return this.iconColor;
    }
    return this.mode === 'secondary' ? 'blue-2' : 'gray-7';

  }

  buttonClick(event: any): void {
    this.click.emit(event);
  }
}
