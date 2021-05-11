import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ts-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  constructor(){
  }
  public form: FormGroup = new FormGroup({});
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
      this.form = new FormGroup ({
        search: new FormControl( '' ),
      });
      this.form.controls.search.valueChanges.subscribe(value => this.sendOnSearch(value));
    }

    sendOnSearch(value: string): void {
      this.search.emit(value);
    }

}
