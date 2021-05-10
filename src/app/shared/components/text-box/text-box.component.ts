import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ts-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() class: string = '';
    @Input() disabled: boolean = false;
    @Input() errorClass: string = '';
    @Input() form: FormGroup | any = null;
    @Input() id: string = '';
    @Input() label: string = '';
    @Input() labelClass: string = '';
    @Input() required: boolean = false;
    @Input() type: string = 'text';

    public control: FormControl | any = null;

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
        this.control = this.form.get(this.id) as FormControl;
    }

    ngOnDestroy(): void {
        // this.form.removeControl(this.id);
    }

    ngAfterViewInit(): void {
        // alert(this.id);
    }

    public onInput(value: string) {
        // this.valueChange.emit(value);
    }
}
