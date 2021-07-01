import {
  AfterViewInit,
  Component, ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';
import { ColumnFilter } from 'primeng/table';

@Component({
  selector: 'ts-column-in-filter',
  templateUrl: './column-in-filter.component.html',
  styleUrls: ['./column-in-filter.component.scss']
})
export class ColumnInFilterComponent implements AfterViewInit, OnChanges {

  constructor() { }

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  @Input() data?: any[];
  @Input() enableSearch?: boolean;
  selectedValue?: string;
  filterCallBack?: Function;
  @Input() field = '';
  @Input() defaultFilterValue = '';
  @Input() headerLabel = '';
  @ViewChild(ColumnFilter) columnFilterRef: ColumnFilter = {} as any;
  @ContentChild('listItem') listItem?: TemplateRef<any>;
  clicked?: boolean;


  ngAfterViewInit(): void {
    setTimeout(() => this.columnFilterRef.toggleMenu());
    setTimeout(() => {
      this.columnFilterRef.el.nativeElement.querySelector('button')
        .classList.remove('p-column-filter-menu-button-open');
      const pi = this.columnFilterRef.el.nativeElement.querySelector('.pi');
      pi.classList.remove('pi-filter');
      pi.classList.add('pi-angle-down');
      this.columnFilterRef.toggleMenu();
    }, 300);
    setTimeout(() => {
      this.data = !this.data || !this.data.length ? this.columnFilterRef.dt.value : this.data;
    });
  }

  onSelectOption($event: any, filterCallback: Function): void {
    if (!this.filterCallBack) {
      this.filterCallBack = filterCallback;
    }
    this.selectedValue = $event.value !== 'any' && $event.value !== this.selectedValue ? $event.value : null;
    this.filterCallBack(!this.selectedValue ? null : [this.selectedValue]);
    this.onChange.emit(this.selectedValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const value = this.defaultFilterValue ? [this.defaultFilterValue] : '';
    this.filterCallBack && this.filterCallBack(value);
  }

  setFilterCallback(filter: Function): void {
    this.filterCallBack = filter;
  }

  onClick(): void {
    this.clicked = true;
  }
}
