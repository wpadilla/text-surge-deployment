import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { fadeListAnimation } from '../../animations';

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    fadeListAnimation
  ]
})
export class ListComponent<T> {
  @Output() click: EventEmitter<T> = new EventEmitter<T>();
  @Input() class = '';
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() bigger = false;
  @Input() disableDivider?: boolean;
  @Input() pointer?: boolean;
  @ContentChild('listItem') listItem?: TemplateRef<any>;


  constructor() {
  }

  onClickItem($event: any, item: T): void  {
    $event.stopPropagation();
    this.click.emit(item);
  }

}
