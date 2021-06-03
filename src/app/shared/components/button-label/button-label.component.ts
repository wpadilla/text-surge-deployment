import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusTypes } from '../../../core/interfaces';

export interface IButtonLabelType{
  backgroundColor: string;
  color: string;
}

export type ButtonLabelTypes = {
  [N in Exclude<StatusTypes, 'warning'>]: IButtonLabelType;
};

@Component({
  selector: 'ts-button-label',
  templateUrl: './button-label.component.html',
  styleUrls: ['./button-label.component.scss']
})
export class ButtonLabelComponent implements OnInit {
    @Input() class: String = '';
    @Input() type: Exclude<StatusTypes, 'warning'> = 'info';
    @Input() value: String = '';
    @Output() click: EventEmitter<void> = new EventEmitter<void>();

    buttonLabelType: IButtonLabelType = {} as any;
    buttonLabelTypes: ButtonLabelTypes = {
      success: {
        backgroundColor: 'background-color-gray-6',
        color: 'text-color-blue-3'
      },
      info: {
        backgroundColor: 'background-color-gray-4',
        color: 'text-color-blue-5'
      },
      danger: {
        backgroundColor: 'background-color-red-3',
        color: 'text-color-red'
      },
      disabled: {
        backgroundColor: 'background-color-gray-3',
        color: 'text-color-gray'
      },
    };

    constructor() { }

    public get className(): string {
        return this.class + ' ' + this.type.replace(/\s+/g, '-').toLowerCase();
    }

    buttonClick(event: any): void {
        event.stopPropagation();
        this.click.emit(event);
    }

    ngOnInit(): void {
      this.buttonLabelType = this.buttonLabelTypes[this.type] || {};
    }
}
