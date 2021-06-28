import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
  Inject
} from '@angular/core';
import { IconTypes } from '../../../core/interfaces/icon.interface';
import { ColorTypes } from '../../../core/interfaces/common.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ts-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit, AfterViewInit  {
    constructor(
      private cdr: ChangeDetectorRef,
      @Inject(DOCUMENT) private document: Document,
      ) {
    }
    static idKey = 0;
    @Input() class = '';
    @Input() required = false;
    @Input() rounded = false;
    @Input() min = 0;
    @Input() max = 0;
    @Input() minLength = 0;
    @Input() maxLength = 10000000;
    @Input() pattern = '';
    @Input() email = false;
    @Input() errorClass = '';
    @Input() id = '';
    @Input() inputId = '';
    @Input() name = '';
    @Input() defaultValue = '';
    @Input() label = '';
    @Input() labelClass = '';
    @Input() type = 'text';
    @Input() icon: IconTypes = '';
    @Input() placeholder = '';
    @Input() iconColor: ColorTypes = 'blue-2';
    @Input() inputElement?: HTMLInputElement;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.cdr.detectChanges();
        // to fix id repeated error
        TextBoxComponent.idKey += 1;
        this.inputId = this.inputId || `input-${TextBoxComponent.idKey}`;
    }

    ngAfterViewInit(): void {
      this.inputElement = this.document.getElementsByTagName('input')[0];
    }

  public onInput(event: any): any {
      const { value } = event.target;
      this.valueChange.emit(value);
    }
}
