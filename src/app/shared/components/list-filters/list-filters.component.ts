import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cleanText } from '../../../../utils/text.util';
import { IAction, IPropertyLabel } from '../../../core/interfaces/common.interface';
import { filterByFields, globalSearch } from '../../../../utils/filter.util';

@Component({
  selector: 'ts-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  constructor() {
  }

  public form: FormGroup = new FormGroup({});
  @Input() dataToFilter: any[] = [];
  @Input() searchField: string | string[] = '';
  @Input() filterByProperties: IPropertyLabel[] = [];
  @Input() sortByProperties: IPropertyLabel[] = [];
  @Input() class = '';
  @Input() searchWrapperClass = '';
  @Input() filtersWrapperClass = '';
  @Input() actionsClass = '';
  @Input() actions: IAction[] = [];
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterData: EventEmitter<any> = new EventEmitter<any>();
  filterByValues: any = {};
  orderByValue: IPropertyLabel = {} as IPropertyLabel;

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
    this.form.controls.search.valueChanges.subscribe(value =>
      // use global search or fields search
      this.searchField && this.searchField.length ? this.onSearchByFields(value) : this.onSearch(value)
    );
    this.filterData.emit(this.dataToFilter);
    this.resetSortBy();
  }

  /* onSearch: search all possible match in all dataToFilter objects
  * @param value: typed value
  * */
  onSearch(value: string): void {
    const hasFilterApplied = JSON.stringify(this.filterByValues) !== '{}' || JSON.stringify(this.orderByValue) !== '{}';

    const dataToFilter = hasFilterApplied ? this.applyFilters(true) as any[] : this.dataToFilter;
    this.filterData.emit(
      globalSearch(dataToFilter, value)
    );
  }

  /* onSearchByFields: search match in the specific fields supplied
  * @param value: typed value
  * */
  onSearchByFields(value: string): void {
    const hasFilterApplied = JSON.stringify(this.filterByValues) !== '{}' || JSON.stringify(this.orderByValue) !== '{}';
    const dataToFilter = hasFilterApplied ? this.applyFilters(true) as any[] : this.dataToFilter;

    this.filterData.emit(filterByFields(dataToFilter, this.searchField, value));
  }

  /* @applyFilters: apply all filters added, sort and filters...
     * @return: void
     * */
  applyFilters(returnValues?: boolean): any[] | void {
    // sorting data correctly before filter.
    const dataToFilter = this.sortData();
    const filtered = dataToFilter.filter(item => {
      // here we apply all filtered have been selected only if there are more than one
      const filterResults = Object.keys(this.filterByValues)
        .map(filterProperty => item[filterProperty] === this.filterByValues[filterProperty]).reduce((a, b) => a && b, true);
      return filterResults;
    });
    this.filterData.emit(filtered);

    // only return if returnValues is set
    if (returnValues) {
      return filtered;
    }
  }

  filterDataBy(property: any, value: any): void {
    if (!value || value.toLowerCase() === 'all') {
      return this.resetFilterBy(property);
    }
    this.filterByValues[property] = value;
    this.applyFilters();
  }

  resetFilterBy(property: string): void {
    delete this.filterByValues[property];
    this.applyFilters();
  }


  sortDataBy(orderBy?: IPropertyLabel): void {
    if (!orderBy) {
      return this.resetSortBy();
    }
    this.orderByValue = orderBy;
    this.applyFilters();
  }

  /* @sortData: for sorting
  * @return: sorted array
  * */
  sortData(): any[] {

    const {property} = this.orderByValue;
    const sortData = this.dataToFilter || [];
    return sortData.sort((a, b) => {
      const x = a[property];
      const y = b[property];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  resetSortBy(): void {
    if (this.sortByProperties[0]) {
      this.sortDataBy(this.sortByProperties[0]);
    }
  }

}
