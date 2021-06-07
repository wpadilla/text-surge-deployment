import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './messaging-viewer.component.html',
  styleUrls: ['./messaging-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagingViewerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  campaignsTree: TreeNode[] = [];
  reviewMessagesIsVisible?: boolean;

  ngOnInit(): void {
    this.campaignsTree = Array.from(new Array(20)).map((item, i) => (
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

    this.campaignsTree.unshift({
      label: 'All Messages',
      styleClass: 'messaging-viewer-cmp-header-option messaging-viewer-cmp-review-all-messages-opt',
    });
  }

}
