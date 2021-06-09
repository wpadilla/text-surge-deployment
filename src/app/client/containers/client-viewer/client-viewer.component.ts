import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { clientMock } from '../../../../utils/mock/client.mock';

@Component({
  selector: 'ts-campaign-viewer',
  templateUrl: './client-viewer.component.html',
  styleUrls: ['./client-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientViewerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  clientsTree: TreeNode[] = [];
  selectedClient?: TreeNode;

  ngOnInit(): void {
    this.clientsTree = clientMock.map((client, i) => (
      {
        label: client.name,
        children: client.accounts && client.accounts.map(account => (
          {
            data: {id: account.id},
            label: account.name,
          }
        )),
        data: {id: client.id},
      } as TreeNode));
    this.selectedClient = this.getSelectedClient();
    console.log('hola mundo', this.selectedClient, this.clientsTree[0].children && this.clientsTree[0].children[0]);

  }

  /* getSelectedClient, search the selected client in the treenode with the same id from routes
  * */
  getSelectedClient(): TreeNode | undefined {
    const id = Number(this.activatedRoute.snapshot.params.id);
    return this.clientsTree.map((treeNode, nodeIndex) => {
      if (treeNode.data.id === id) {
        return treeNode;
      } else if (treeNode.children && treeNode.children.length) {
        const childNode = treeNode.children.find(child => child.data.id === id);
        if (childNode) {
          this.clientsTree[nodeIndex] = {...this.clientsTree[nodeIndex], expanded: true};
        }
        return childNode;
      } else {
        return;
      }
    }).filter(item => !!item)[0];
  }

  goToCampaign(): void {
    this.router.navigate(['main/campaign/create/details']);
  }

  onSelectClient(data: any): void {
    console.log('data', data, 'selected client', this.selectedClient);
  }
}
