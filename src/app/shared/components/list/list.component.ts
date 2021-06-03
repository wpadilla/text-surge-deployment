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
import { NgForOf, NgForOfContext, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> {
  @Output() click: EventEmitter<T> = new EventEmitter<T>();
  @Input() class = '';
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() bigger = false;
  @Input() disableDivider?: boolean;
  @ContentChild('listItem') listItem?: TemplateRef<any>;

  constructor() {
  }

  onClickItem($event: any, item: T): void  {
    $event.stopPropagation();
    this.click.emit(item);
  }

}
