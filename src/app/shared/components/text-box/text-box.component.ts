import { Component, ChangeDetectorRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ts-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
    @Input() class: string = '';
    @Input() disabled: boolean = false;
    @Input() errorClass: string = '';
    @Input() form: FormGroup | any = null;
    @Input() id: string = '';
    @Input() label: string = '';
    @Input() labelClass: string = '';
    @Input() type: string = 'text';
    @Input() icon = '';
    @Input() placeholder = '';

    public control: FormControl | any = null;

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.control = this.form.get(this.id) as FormControl;
        this.cdr.detectChanges();
    }

    public onInput(value: string) {
        // this.valueChange.emit(value);
    }
}
