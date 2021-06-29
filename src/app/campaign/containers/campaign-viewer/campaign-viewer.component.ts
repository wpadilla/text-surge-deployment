import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';
import { clientMock } from '../../../../utils/mock';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './campaign-viewer.component.html',
  styleUrls: ['./campaign-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  campaignsTree: TreeNode[] = [];

  ngOnInit(): void {
    this.campaignsTree = clientMock.map((client) => (
      {
        label: client.name,
        children: client.campaigns.map(campaign => ({ label: campaign.description }))
      }));
  }

  goToCampaign($event: any): void {
    $event.stopPropagation();
    this.router.navigate(['main/campaign/create/details']);
  }

}
