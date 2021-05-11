import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cleanText } from '../../../../utils/text';
import { IPropertyLabel, IPropertyValue } from '../../../core/interfaces/common';

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
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterData: EventEmitter<any> = new EventEmitter<any>();
  filterByValue: any = {};

  ngOnInit(): void {
      this.form = new FormGroup ({
        search: new FormControl( '' ),
      });
      this.form.controls.search.valueChanges.subscribe(value => this.onSearch(value));
      this.filterData.emit(this.dataToFilter);
  }

  onSearch(value: string): void {
    const cleanedText = cleanText(value);
    const dataFiltered = this.dataToFilter.filter(item => cleanText(item.description).includes(cleanedText));
    this.filterData.emit(dataFiltered);
  }

  filterDataBy(property: string, value: string): void {
    this.filterByValue[property] = value;
    const filtered = this.dataToFilter.filter(item => item[property] === value);
    this.filterData.emit(filtered);
  }

  resetFilterBy(property: string): void {
    this.filterByValue[property] = null;
    this.filterData.emit(this.dataToFilter);
  }

}
