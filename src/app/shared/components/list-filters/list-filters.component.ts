import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cleanText } from '../../../../utils/text';

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
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterData: EventEmitter<any> = new EventEmitter<any>();

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

}
