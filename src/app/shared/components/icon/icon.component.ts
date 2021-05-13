import { Component, Input, OnInit } from '@angular/core';
import { ColorTypes, SizeTypes } from '../../../core/interfaces/common';
import { IconTypes, IIConSize, IIconSizePresets } from '../../../core/interfaces/icon';

@Component({
  selector: 'ts-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() type: IconTypes = 'home';
  @Input() size: SizeTypes | IIConSize  = 'sm';
  @Input() customSize?: IIConSize;
  @Input() color: ColorTypes = 'gray';
  @Input() class = '';
  iconSize: IIConSize = {} as IIConSize;

  public sizePresets: IIconSizePresets = {
    sm: {
      width: '25px',
      viewBox: '0 0 25 25',
    },
    md: {
      width: '45px',
      viewBox: '0 0 25 25',
    },
    lg: {
      width: '65px',
      viewBox: '0 0 25 25',
    },
    xl: {
      width: '85px',
      viewBox: '0 0 25 25',
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.setIconSize();
  }

  setIconSize(): void {
    this.iconSize = this.customSize || this.sizePresets[this.size as SizeTypes];
  }

}
