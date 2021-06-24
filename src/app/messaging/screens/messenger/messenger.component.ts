import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit, ViewChild,
} from '@angular/core';
import {
  fadeAnimation,
  horizontalSlideAnimation,
  popInAnimation,
  verticalSlideAnimation
} from '../../../shared/animations';
import { TextBoxComponent } from '../../../shared/components/text-box/text-box.component';
import IMessage from '../../../core/interfaces/message.interface';
import { routePathNames } from '../../../../utils/routes.utils';
import { Router } from '@angular/router';

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
  @ViewChild('textBoxMessage') textBoxMessage: TextBoxComponent = {} as any;
  messages: IMessage[] = [];
  messageDelay?: number;
  isReassignDialogOpen?: boolean;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // set the scroll to the bottom in order to see the last messages
    this.messagesContainerRef.nativeElement.scroll({top: this.messagesContainerRef.nativeElement.scrollHeight});
    window.addEventListener('scroll', (data: any) => {
      this.conversationRef.nativeElement.style.height = (window.innerHeight - 65) + (window.scrollY > 65 ? 65 : window.scrollY) + 'px';
    });
  }

  onSelectScript(event: any): void {
    const element = event.target;
    if (this.textBoxMessage.inputElement) {
      this.textBoxMessage.inputElement.value = element.innerText;
    }
  }

  sendMessage($event: any): void {
    $event.stopPropagation();
    if (this.textBoxMessage.inputElement && this.textBoxMessage.inputElement.value) {
      if (!this.messageDelay) {
        this.messageDelay = 1;
      }
      this.messages.push({
        transmitter: 'Joe Doe',
        timeSent: new Date(),
        sms: this.textBoxMessage.inputElement.value,
        type: 'outgoing',
      });
      this.textBoxMessage.inputElement.value = '';
      setTimeout(() => {
        const {scrollHeight} = this.messagesContainerRef.nativeElement;
        this.messagesContainerRef.nativeElement.scroll({top: scrollHeight + 1000});
      }, 100);
    }
  }

  reassignConversation(): void {
    this.router.navigate([routePathNames.main.messaging.inbox.path]);
  }
}
