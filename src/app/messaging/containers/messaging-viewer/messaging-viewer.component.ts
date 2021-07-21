import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { IAction } from '../../../core/interfaces';
import { routePathNames } from '../../../../utils/routes.utils';
import { Location } from '@angular/common';
import { clientMock } from '../../../../utils/mock';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './messaging-viewer.component.html',
  styleUrls: ['./messaging-viewer.component.scss'],
})
export class MessagingViewerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {
  }

  messagingTree: TreeNode[] = [];
  messagingOptions: IAction[] = [];
  selectedKey = 'none';

  ngOnInit(): void {

    if (this.location.path() === '/main/messaging') {
      this.router.navigate([routePathNames.main.messaging.assignments.path]).then(() => {
        this.init();
      });
    } else {
      this.init();
    }

  }

  /* init, initialize all the messaging viewer requierements
  * @return void
  * */
  init(): void {
    this.messagingTree = clientMock.map((client) => (
      {
        label: client.name,
        key: `client-${client.id}`,
        children: client.campaigns.map(campaign => ({
          label: campaign.description,
          key: `campaign-${campaign.id}`,
        }))
      }));

    this.messagingTree.unshift({
      label: 'All Messages',
      styleClass: 'messaging-viewer-cmp-header-option messaging-viewer-cmp-review-all-messages-opt',
      key: 'all',
    });

    this.fillMessagingOptions();
    this.getSelectedNode();
  }

  getSelectedNode(): void {
    const path = this.location.path();
    const id = path.split('/').pop();
    if (Number(id)) {
      this.selectedKey = path.includes('client') ? `client-${id}` : `campaign-${id}`;
    } else if (path.includes('view')) {
      this.selectedKey = 'all';
    }
  }

  /* getIsActive: check if */
  getIsActive(str: string): boolean {
    return location.pathname.replace(/[\/]/gi, '').includes(str.replace(/[\/]/gi, ''));
  }

  returnNavigation(url: string[]): () => void {
    return () => {
      this.router.navigate(url);
    };
  }

  fillMessagingOptions(): void {
    this.messagingOptions = [
      {
        label: 'Texter Dashboard',
        action: this.returnNavigation([routePathNames.main.messaging.assignments.path]),
        isActive: this.getIsActive(routePathNames.main.messaging.assignments.path),
      },
      {
        label: 'Inbox',
        action: this.returnNavigation([routePathNames.main.messaging.inbox.path]),
        isActive: this.getIsActive(routePathNames.main.messaging.inbox.path),
      },
      {
        label: 'Self-Assignments Request',
        action: this.returnNavigation([routePathNames.main.messaging['self-assignment-requests'].path]),
        isActive: this.getIsActive(routePathNames.main.messaging['self-assignment-requests'].path),

      },
      {
        label: 'Reassign Replies',
        action: this.returnNavigation([routePathNames.main.messaging['reassign-replies'].path]),
        isActive: this.getIsActive(routePathNames.main.messaging['reassign-replies'].path),
      },
    ];
  }

  /**/
  onSelectCampaign(treeNode: TreeNode): void {
    const keySplit = treeNode && treeNode.key ? treeNode.key.split('-') : [];
    const id = Number(keySplit.pop());
    if (id) {
      if (keySplit.indexOf('client') > -1) {
        this.router.navigate([routePathNames.main.messaging.client.path, id]);
      } else {
        this.router.navigate([routePathNames.main.messaging.campaign.path, id]);
      }
    } else if (treeNode.key === 'all') {
      this.router.navigate([routePathNames.main.messaging.view.path]);
    }
    setTimeout(() => this.getSelectedNode());
  }

}
