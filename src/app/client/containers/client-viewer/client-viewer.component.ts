import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { clientMock } from '../../../../utils/mock/client.mock';
import IClient from '../../../core/interfaces/client.interface';

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
  clientId: number = 0;
  clientsTree: TreeNode[] = [];

  ngOnInit(): void {
    this.clientId = this.activatedRoute.snapshot.params.id;
    this.clientsTree = clientMock.map((client, i) => (
      {
        key: String(client.id),
        label: client.name,
        children: client.accounts && client.accounts.map(account => (
          {
            key: String(account.id),
            label: account.name,
          }
        )),
      } as TreeNode));
  }


  goToCreateClient(): void {
    this.router.navigate(['main/client/create']);
  }

  onSelectClient(treeNode: TreeNode): void {
    const id = treeNode ? Number(treeNode.key) : undefined;
    this.router.navigate(['main/client/view', id]);
    this.setSelectedClient(id);
  }

  /* setSelectedClient, set the client according to the id received from route
* */
  setSelectedClient(id?: number): void {
    if (!id) { return; }
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
    this.clientId = this.client.id;
    // if client doesn't exist redirect to client list
    if (!this.client.id) {
      this.router.navigate(['main/client']);
    }
  }
}
