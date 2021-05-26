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
    this.campaignsTree = [
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Games',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
      {
        label: 'Va Dems',
        children: [
          {
            label: 'One Other'
          }
        ]
      },
    ];
  }

}
