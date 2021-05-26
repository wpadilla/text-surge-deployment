import { Component, ChangeDetectorRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconTypes } from '../../../core/interfaces/icon.interface';
import { ColorTypes } from '../../../core/interfaces/common.interface';

@Component({
  selector: 'ts-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit  {
    constructor(private cdr: ChangeDetectorRef) {
    }
    static idKey = 0;
    @Input() class = '';
    @Input() required = false;
    @Input() min = 0;
    @Input() max = 0;
    @Input() minLength = 0;
    @Input() maxLength = 10000000;
    @Input() pattern = '';
    @Input() email = false;
    @Input() errorClass = '';
    @Input() id = '';
    @Input() name = '';
    @Input() defaultValue = '';
    @Input() label = '';
    @Input() labelClass = '';
    @Input() type = 'text-variables.scss';
    @Input() icon: IconTypes = '';
    @Input() placeholder = '';
    @Input() iconColor: ColorTypes = 'blue-2';
    @Input() inputElement?: HTMLInputElement;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.cdr.detectChanges();
        TextBoxComponent.idKey += 1;
        this.id = `input-${TextBoxComponent.idKey}`;
        this.inputElement = document.getElementsByTagName('input')[0];
    }

    public onInput(event: any): any {
      const { value } = event.target;
      this.valueChange.emit(value);
    }
}
