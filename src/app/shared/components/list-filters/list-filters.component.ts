import { Component, ChangeDetectorRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ts-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

    constructor(
    ) {
    }

    ngOnInit(): void {

    }

}
