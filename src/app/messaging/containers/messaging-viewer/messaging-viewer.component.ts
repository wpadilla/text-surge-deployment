import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';
import { IAction } from '../../../core/interfaces';
import { routePathNames } from '../../../../utils/routes.utils';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './messaging-viewer.component.html',
  styleUrls: ['./messaging-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagingViewerComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  messagingTree: TreeNode[] = [];
  messagingOptions: IAction[] = [];

  ngOnInit(): void {
    this.messagingTree = Array.from(new Array(20)).map((item, i) => (
      {
        label: 'Va Games ' + i,
        children: [
          {
            label: 'One Other'
          },
          {
            label: 'One Other 2'
          }
        ]
      }));

    this.messagingTree.unshift({
      label: 'All Messages',
      styleClass: 'messaging-viewer-cmp-header-option messaging-viewer-cmp-review-all-messages-opt',
    });

    this.fillMessagingOptions();
  }

  fillMessagingOptions(): void {
    this.messagingOptions = [
      {
        label: 'Texter Dashboard',
        action: () => this.router.navigate([routePathNames.main.messaging['texter-dashboard'].path]),
      },
      {
        label: 'Inbox',
        action: () => console.log('pressed'),
      },
      {
        label: 'Self-Assignments Request',
        action: () => console.log('pressed'),
      },
      {
        label: 'Reassign Replies',
        action: () => console.log('pressed'),
      },
    ];
  }
}
