import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './campaign-viewer.component.html',
  styleUrls: ['./campaign-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewerComponent implements OnInit {

  constructor() { }
  campaignsTree: TreeNode[] = [];

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
  }

}
