import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ColorTypes, SizeTypes } from '../../../core/interfaces/common.interface';
import { IconTypes } from '../../../core/interfaces/icon.interface';

@Component({
  selector: 'ts-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() type: IconTypes = 'home';
  @Input() size: SizeTypes  = 'sm';
  @Input() color: ColorTypes = 'gray';
  @Input() bold?: boolean;
  @Input() class = '';
  @Input() wrapperClass = '';

  constructor() {}

  ngOnInit(): void {
    this.setBoldIfRequired();
  }

  setBoldIfRequired(): void {
    this.class = this.bold ? `stroke-${this.color} ${this.class}` : this.class;
  }

}
