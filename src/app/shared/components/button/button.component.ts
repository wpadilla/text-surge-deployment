import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorTypes, SizeTypes } from "../../../core/interfaces/common";
import { IconTypes } from "../../../core/interfaces/icon";

@Component({
  selector: 'ts-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() class: String = '';
    @Input() disabled: boolean = false;
    @Input() type: String = 'button';
    @Input() value: String = '';
    @Input() icon: IconTypes = '';
    @Input() iconColor: ColorTypes = 'gray-2';
    @Input() iconSize: SizeTypes = 'sm';

    @Output() click: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    buttonClick(event: any): void {
        event.stopPropagation();
        this.click.emit(event);
    }
}
