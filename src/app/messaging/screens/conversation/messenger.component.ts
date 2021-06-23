import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import TemplateChangesService from '../../../core/services/template-changes.service';

@Component({
  selector: 'ts-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class MessengerComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
