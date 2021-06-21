import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

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
