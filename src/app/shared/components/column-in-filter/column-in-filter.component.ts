import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ColumnFilter } from 'primeng/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ts-column-in-filter',
  templateUrl: './column-in-filter.component.html',
  styleUrls: ['./column-in-filter.component.scss']
})
export class ColumnInFilterComponent implements AfterViewInit, OnChanges {

  constructor() { }

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  @Input() data: any[] = [];
  selectedValue?: string;
  filterCallBack?: Function;
  @Input() field = '';
  @Input() defaultFilterValue = '';
  @Input() headerLabel = '';
  @ViewChild(ColumnFilter) columnFilter: ColumnFilter = {} as any;
  clicked?: boolean;


  ngAfterViewInit(): void {
    this.columnFilter.toggleMenu();
    setTimeout(() => {
      this.columnFilter.el.nativeElement.querySelector('button')
        .classList.remove('p-column-filter-menu-button-open');
      const pi = this.columnFilter.el.nativeElement.querySelector('.pi');
      pi.classList.remove('pi-filter');
      pi.classList.add('pi-angle-down');
      this.columnFilter.toggleMenu();
    }, 300);
  }

  onSelectOption($event: any, filterCallback: Function): void {
    this.filterCallBack = filterCallback;
    const value = $event.value !== 'any' ? [$event.value] : null;
    this.selectedValue = $event.value !== 'any' ? $event.value : null;
    this.filterCallBack(value);
    this.onChange.emit(this.selectedValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterCallBack && this.filterCallBack([this.defaultFilterValue]);
  }

  setFilterCallback(filter: Function): void {
    this.filterCallBack = filter;
  }

  onClick(): void {
    this.clicked = true;
  }
}
