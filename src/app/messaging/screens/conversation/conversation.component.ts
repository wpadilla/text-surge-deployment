import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fakeMessageMock, phoneNumbersMock } from '../../../../utils/mock';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import { IAction, ILabelValue, IPropertyLabel } from '../../../core/interfaces';
import ToastService from '../../../core/services/toast.service';
import { routePathNames } from '../../../../utils/routes.utils';
import { ActivatedRoute } from '@angular/router';
import IMessage from "../../../core/interfaces/message.interface";

@Component({
  selector: 'ts-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class ConversationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
}
