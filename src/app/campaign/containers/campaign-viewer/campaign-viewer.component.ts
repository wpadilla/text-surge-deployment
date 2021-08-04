import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { clientMock } from '../../../../utils/mock';
import CampaignFacade from '../../../core/services/campaign/campaign.facade';
import { ICampaign } from '../../../core/interfaces';
import { routePathNames } from '../../../../utils/routes.utils';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './campaign-viewer.component.html',
  styleUrls: ['./campaign-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRouterSnapshot: ActivatedRoute,
    private campaignFacade: CampaignFacade,
  ) { }
  campaignsTree: TreeNode[] = [];
  campaign: ICampaign = {} as any;
  campaignId?: string;

  ngOnInit(): void {
    this.campaignId = this.activatedRouterSnapshot.snapshot.params.id;
    this.campaignsTree = clientMock.map((client) => (
      {
        label: client.name,
        children: client.campaigns.map(campaign => ({ label: campaign.description, key: String(campaign.id) }))
      }));
  }

  goToCreateCampaign($event: any): void {
    $event.stopPropagation();
    this.router.navigate([routePathNames.main.campaign.create.details.path]);
  }

  onSelectCampaign(treeNode: TreeNode): void {
    const id = treeNode ? Number(treeNode.key) : undefined;
    if (id) {
      this.router.navigate([routePathNames.main.campaign.view.path, id]);
      this.campaign = this.campaignFacade.get(id) || {} as any;
    }

  }

}
