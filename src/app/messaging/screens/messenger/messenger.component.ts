import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit, ViewChild,
} from '@angular/core';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';

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

  @ViewChild('messengerConversation') conversationRef: { nativeElement: HTMLDivElement } = {} as any;
  @ViewChild('messagesContainer') messagesContainerRef: { nativeElement: HTMLDivElement } = {} as any;
  conversationHeight = 0;
  messages = Array.from(new Array(20)).map(item => 1);
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // set the initial height of the conversation container
    this.conversationHeight = this.conversationRef.nativeElement.clientHeight;
    // set the scroll to the bottom in order to see the last messages
    this.messagesContainerRef.nativeElement.scroll({ top: this.messagesContainerRef.nativeElement.scrollHeight });
    window.addEventListener('scroll', (data: any) => {
      this.conversationRef.nativeElement.style.height =  this.conversationHeight + (window.scrollY > 65 ? 65 : window.scrollY) + 'px';
    });
  }

  ngOnDestroy(): void {
  }

}
