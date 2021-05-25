import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'ts-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  @Output() change: EventEmitter<{ value: any }> = new EventEmitter<{ value: any }>();
  @Input() data: any[] = [];
  @Input() placeholder = '';
  @Input() label = '';
  @Input() styleClass = '';
  @Input() wrapperClass = '';
  @Input() dropdownClass = '';
  @Input() optionLabel = '';
  @Input() showClear = false;
  @Input() fullWidth = false;
  @Input() borderBottom = false;
  @Output() onClear: EventEmitter<Dropdown> = new EventEmitter<Dropdown>();

  ngOnInit(): void {
  }

  onFocus($event: any): void {
    $event.target.blur();
  }
}
