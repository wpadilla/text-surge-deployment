import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

    @Output() click: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    buttonClick(event: any): void {
        event.stopPropagation();
        console.log('click');
        this.click.emit(event);
    }
}
