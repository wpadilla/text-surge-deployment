import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './client-viewer.component.html',
  styleUrls: ['./client-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientViewerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
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

  goToCampaign(): void {
    this.router.navigate(['main/campaign/create/details']);
  }

}
