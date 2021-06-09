import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { clientMock } from '../../../../utils/mock/client.mock';
import IClient from "../../../core/interfaces/client.interface";

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
  client: IClient = {} as any;
  clientsTree: TreeNode[] = [];
  selectedTree?: TreeNode;

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
    this.selectedTree = this.getSelectedTree();
  }

  /* getSelectedTree, search the selected client in the treeNode with the same id from routes
  * @return: the TreeNode element that correspond to the selected id
  * */
  getSelectedTree(): TreeNode | undefined {
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

  goToCreateClient(): void {
    this.router.navigate(['main/client/create']);
  }

  onSelectClient(): void {
    const id = this.selectedTree ? this.selectedTree.data.id : '';
    this.router.navigate(['main/client/view', id]);
    this.setSelectedClient(id);
  }

  /* setSelectedClient, set the client according to the id received from route
* */
  setSelectedClient(id: number): void {
    for (const client of clientMock) {
      if (client.id === id) {
        this.client = client;
        break;
      } else if (client.accounts && client.accounts.length) {
        const account = client.accounts.find(acc => acc.id === id) || {} as any;
        if (account.id) {
          this.client = account;
          break;
        }
      }
    }
    // if client doesn't exist redirect to client list
    if (!this.client.id) {
      this.router.navigate(['main/client']);
    }
  }
}
