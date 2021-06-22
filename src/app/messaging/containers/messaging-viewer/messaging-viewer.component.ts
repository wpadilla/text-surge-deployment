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

  /* getIsActive: check if */
  getIsActive(str: string): boolean {
    return location.pathname.replace(/[\/]/gi, '').includes(str.replace(/[\/]/gi, ''));
  }

  fillMessagingOptions(): void {
    this.messagingOptions = [
      {
        label: 'Texter Dashboard',
        action: () => this.router.navigate([routePathNames.main.messaging.assignments.path]),
        isActive: this.getIsActive(routePathNames.main.messaging.assignments.path),
      },
      {
        label: 'Inbox',
        action: () => this.router.navigate([routePathNames.main.messaging.inbox.path]),
        isActive: this.getIsActive(routePathNames.main.messaging.inbox.path),
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
