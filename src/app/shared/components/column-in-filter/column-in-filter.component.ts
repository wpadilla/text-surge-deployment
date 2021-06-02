import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-column-in-filter',
  templateUrl: './column-in-filter.component.html',
  styleUrls: ['./column-in-filter.component.scss']
})
export class ColumnInFilterComponent implements OnInit {

  constructor() { }

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() data: any[] = [];
  @Input() model?: any;

  ngOnInit(): void {
  }

  onSelectOption($event: any, filterCallback: Function): void {
    const value = $event.value !== 'any' ? [$event.value] : null;
    filterCallback(value);
    this.onChange.emit(value);
  }

}
