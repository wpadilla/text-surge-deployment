import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ICampaign } from 'src/app/core/interfaces';
import { NgForOf, NgForOfContext, NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> implements OnInit, AfterViewInit {
  @Output() click: EventEmitter<ICampaign> = new EventEmitter<ICampaign>();
  @Input() class = '';
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() bigger = false;
  @Input() disableDivider?: boolean;
  @ContentChild('listItem') listItem?: TemplateRef<any>;


  completed = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('item',this.listItem);

  }

  checkCompleteStatus(): void {
  }
}
