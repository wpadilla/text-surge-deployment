import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cleanText } from '../../../../utils/texts';
import { IPropertyLabel } from '../../../core/interfaces/common';

@Component({
  selector: 'ts-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  constructor(){
  }

  public form: FormGroup = new FormGroup({});
  @Input() dataToFilter: any[] = [];
  @Input() filterByProperties: IPropertyLabel[] = [];
  @Input() sortByProperties: IPropertyLabel[] = [];
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterData: EventEmitter<any> = new EventEmitter<any>();
  selectedCity1: any = {};
  filterByValues: any = {};
  orderByValue: IPropertyLabel = {} as IPropertyLabel;

  ngOnInit(): void {
      this.form = new FormGroup ({
        search: new FormControl( ''),
      });
      this.form.controls.search.valueChanges.subscribe(value => this.onSearch(value));
      this.filterData.emit(this.dataToFilter);
      this.resetSortBy();
  }

  onSearch(value: string): void {
    const cleanedText = cleanText(value);
    const dataFiltered = this.dataToFilter.filter(item => cleanText(item.description).includes(cleanedText));
    this.filterData.emit(dataFiltered);
  }

  /* @applyFilters: apply all filters added, sort and filters...
     * @return: void
     * */
  applyFilters(): void {
    // sorting data correctly before filter.
    const dataToFilter = this.sortData();
    const filtered = dataToFilter.filter(item => {
      // here we apply all filtered have been selected only if there are more than one
      const filterResults = Object.keys(this.filterByValues)
        .map(filterProperty => item[filterProperty] === this.filterByValues[filterProperty]).reduce((a, b) => a && b, true);
      return filterResults;
    });
    this.filterData.emit(filtered);
  }

  filterDataBy(property: any, value: any): void {
    if(!value || value.toLowerCase() === 'all') {
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
    if(!orderBy) {
      return this.resetSortBy();
    }
    this.orderByValue = orderBy;
    this.applyFilters();
  }

  /* @sortData: for sorting
  * @return: sorted array
  * */
  sortData(): any[] {
    const { property } = this.orderByValue;
    return this.dataToFilter.sort((a, b) => {
      const x = a[property];
      const y = b[property];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  resetSortBy(): void {
    this.sortDataBy(this.sortByProperties[0]);
  }

}
