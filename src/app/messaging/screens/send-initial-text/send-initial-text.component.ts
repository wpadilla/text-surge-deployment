import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { phoneNumbersMock } from '../../../../utils/mock';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-texter-dashboard',
  templateUrl: './send-initial-text.component.html',
  styleUrls: ['./send-initial-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class SendInitialTextComponent implements OnInit {

  constructor() {
  }
  contacts = phoneNumbersMock;
  selectedContact: IPhoneNumber = {} as any;

  ngOnInit(): void {
    this.selectedContact = this.contacts[0];
  }
}
