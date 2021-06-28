import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-column-text-item',
  templateUrl: './column-text-item.component.html',
  styleUrls: ['./column-text-item.component.scss']
})
export class ColumnTextItemComponent implements OnInit {
    @Input() label = '';
    @Input() labelClass = '';
    @Input() text = '';
    @Input() textClass = '';
    @Input() disableBorder?: boolean;
    @Input() disablePaddingLeft?: boolean;
    @Input() disablePaddingRight?: boolean;

    constructor() { }

    ngOnInit(): void {
    }
}
