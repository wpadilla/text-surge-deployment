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

  constructor() {
  }

  static defaultFilteredWasSet = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  @Input() data?: any[];
  @Input() enableSearch?: boolean;
  selectedValue?: string;
  @Input() field = '';
  @Input() defaultFilterValue = '';
  @Input() headerLabel = '';
  @ViewChild(ColumnFilter) columnFilterRef: ColumnFilter = {} as any;
  @ContentChild('listItem') listItem?: TemplateRef<any>;


  ngAfterViewInit(): void {

    this.columnFilterRef.el.nativeElement.querySelector('button')
      .classList.remove('p-column-filter-menu-button-open');
    const pi = this.columnFilterRef.el.nativeElement.querySelector('.pi');
    pi.classList.remove('pi-filter');
    pi.classList.add('pi-angle-down');
    this.data = !this.data || !this.data.length ? this.columnFilterRef.dt.value : this.data;
    this.setDefaultFilters();
  }

  onSelectOption($event: any, filterCallback: Function): void {
    this.selectedValue = $event.value !== 'any' && $event.value !== this.selectedValue ? $event.value : null;
    filterCallback(!this.selectedValue ? null : [this.selectedValue]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDefaultFilters();
  }

  setDefaultFilters(): void {
    if (this.defaultFilterValue) {
      ColumnInFilterComponent.defaultFilteredWasSet = !ColumnInFilterComponent.defaultFilteredWasSet ?
        !!this.defaultFilterValue : ColumnInFilterComponent.defaultFilteredWasSet;

      this.columnFilterRef &&
      this.columnFilterRef.dt &&
      this.columnFilterRef.dt.filter(this.defaultFilterValue ? [this.defaultFilterValue] : '', this.field, 'in');
    }
  }

  clickFilter(event: MouseEvent): void {
    if (ColumnInFilterComponent.defaultFilteredWasSet) {
      this.columnFilterRef.dt.reset();
      ColumnInFilterComponent.defaultFilteredWasSet = false;
    }
  }

}
