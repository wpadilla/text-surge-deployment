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
  filterByValues: any = {};
  orderByValue = '';

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

  applyFilters(): void {
    const filtered = this.dataToFilter.filter(item => {
      const filterResults = Object.keys(this.filterByValues)
        .map(filterProperty => item[filterProperty] === this.filterByValues[filterProperty]).reduce((a, b) => a && b, true);
      return filterResults;
    });
    this.filterData.emit(filtered);
  }

  filterDataBy(property: string, value: string): void {
    this.filterByValues[property] = value;
    this.applyFilters();
  }

  resetFilterBy(property: string): void {
    delete this.filterByValues[property];
    this.applyFilters();
  }

  sortDataBy(orderBy: IPropertyLabel): void {
    const { label, property } = orderBy;
    this.orderByValue = label;
    const sortedData = this.dataToFilter.sort((a, b) => {
      const x = a[property];
      const y = b[property];
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.filterData.emit(sortedData);
  }

  resetSortBy(): void {
    this.sortDataBy(this.sortByProperties[0]);
  }

}
