import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ts-button-label',
  templateUrl: './button-label.component.html',
  styleUrls: ['./button-label.component.scss']
})
export class ButtonLabelComponent {
    @Input() class: String = '';
    @Input() type: String = 'button';
    @Input() value: String = '';

    @Output() click: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public get className(): string {
        return this.class + ' ' + this.type.replace(/\s+/g, '-').toLowerCase();
    }

    buttonClick(event: any): void {
        event.stopPropagation();
        console.log('click');
        this.click.emit(event);
    }
}
