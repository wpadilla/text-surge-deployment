import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
} from '@angular/core';
import { ColorTypes, SizeTypes } from '../../../core/interfaces/common.interface';
import { IconTypes } from '../../../core/interfaces/icon.interface';

@Component({
  selector: 'ts-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Output() click: EventEmitter<any> = new EventEmitter();
  @Input() type: IconTypes = 'home';
  @Input() customType?: 'assign'  | 'user-place-holder' | 'user-placeholder-online';
  @Input() size: SizeTypes  = 'sm';
  @Input() color: ColorTypes = '';
  @Input() bold?: boolean;
  @Input() class = '';
  @Input() wrapperClass = '';
  customTypes: any = {
    assign: 'assets/icons/assign.svg#Assign',
    'user-placeholder': 'assets/icons/user-placeholder.svg#user-placeholder',
    'user-placeholder-online': 'assets/icons/user-placeholder-online.svg#User-Placeholder-Online',
  };
  constructor() {}

  ngOnInit(): void {
    this.setBoldIfRequired();
  }

  setBoldIfRequired(): void {
    this.class = this.bold ? `stroke-${this.color} ${this.class}` : this.class;
  }

  onClick($event: any): void {
    this.click.emit($event);
  }
}
