import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorTypes, SizeTypes } from '../../../core/interfaces/common.interface';
import { IconTypes, IIConSize } from '../../../core/interfaces/icon.interface';

@Component({
  selector: 'ts-column-text-item',
  templateUrl: './column-text-item.component.html',
  styleUrls: ['./column-text-item.component.scss']
})
export class ColumnTextItemComponent implements OnInit {
    @Input() label = '';
    @Input() text = '';
    @Input() disableBorder?: boolean;
    @Input() disablePaddingLeft?: boolean;
    @Input() disablePaddingRight?: boolean;

    constructor() { }

    ngOnInit(): void {
    }
}
