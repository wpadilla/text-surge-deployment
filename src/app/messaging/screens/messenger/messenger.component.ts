import {
  AfterViewInit,
  Component,
  OnInit, ViewChild,
} from '@angular/core';
import {
  fadeAnimation,
  horizontalSlideAnimation,
  popInAnimation,
  verticalSlideAnimation
} from '../../../shared/animations';
import IMessage from '../../../core/interfaces/message.interface';
import { routePathNames } from '../../../../utils/routes.utils';
import { Router } from '@angular/router';
import IUser from '../../../core/interfaces/user.interface';
import { usersMock } from '../../../../utils/mock';
import { IPropertyLabel } from '../../../core/interfaces';

@Component({
  selector: 'ts-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  animations: [
    fadeAnimation,
    popInAnimation,
    horizontalSlideAnimation,
    verticalSlideAnimation,
  ]
})
export class MessengerComponent implements OnInit, AfterViewInit {

  @ViewChild('messengerConversation') conversationRef: { nativeElement: HTMLDivElement } = {} as any;
  @ViewChild('messagesContainer') messagesContainerRef: { nativeElement: HTMLDivElement } = {} as any;
  textBoxMessageId = 'textBoxMessage';

  messages: IMessage[] = [];
  messageDelay?: number;
  isReassignDialogOpen?: boolean;
  isTexterDialogOpen?: boolean;
  isArchiveDialogOpen?: boolean;
  archivedConversation?: boolean;
  texters: IUser[] = usersMock;
  filteredTexters: IUser[] = [];
  texterSelected: IUser = {} as any;
  sortByProperties: IPropertyLabel[] = [{
    label: 'Status',
    property: 'hasAssignments',
  },
    {
      label: 'Last Name',
      property: 'lastName',
    }
  ];
  timeRequest = new Date();
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.texterSelected = this.texters[0];
  }

  ngAfterViewInit(): void {
    // set the scroll to the bottom in order to see the last messages
    this.messagesContainerRef.nativeElement.scroll({top: this.messagesContainerRef.nativeElement.scrollHeight});
    window.addEventListener('scroll', (data: any) => {
      this.conversationRef.nativeElement.style.height = (window.innerHeight - 65) + (window.scrollY > 65 ? 65 : window.scrollY) + 'px';
    });
  }

  onSelectScript(event: any): void {
    const messageElement = document.getElementById(this.textBoxMessageId) as HTMLInputElement;
    const element = event.target;
    if (messageElement) {
      messageElement.value = element.innerText;
    }
  }

  sendMessage($event: any): void {
    $event.stopPropagation();
    const messageElement = document.getElementById(this.textBoxMessageId) as HTMLInputElement;
    if (messageElement.value) {
      if (!this.messageDelay) {
        this.messageDelay = 1;
      }
      this.messages.push({
        transmitter: 'Joe Doe',
        timeSent: new Date(),
        sms: messageElement.value,
        type: 'outgoing',
      });
      messageElement.value = '';
      setTimeout(() => {
        const {scrollHeight} = this.messagesContainerRef.nativeElement;
        this.messagesContainerRef.nativeElement.scroll({top: scrollHeight + 1000});
      }, 100);
    }
  }

    setFilteredTexters(data: any[]): void {
      this.filteredTexters = data;
    }

  archiveConversation(event: any): void {
    event.stopPropagation();
    this.isArchiveDialogOpen = false;
    this.archivedConversation = !this.archivedConversation;
  }

  reassignConversation(): void {
    this.router.navigate([routePathNames.main.messaging.inbox.path]);
  }

}
