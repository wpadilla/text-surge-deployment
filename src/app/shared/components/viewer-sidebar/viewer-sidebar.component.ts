import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAction } from '../../../core/interfaces/common.interface';
import { TreeNode } from 'primeng/api';
import { expandHeightAnimation, horizontalSlideAnimation } from '../../animations';

@Component({
  selector: 'ts-viewer-sidebar',
  templateUrl: './viewer-sidebar.component.html',
  styleUrls: ['./viewer-sidebar.component.scss'],
  animations: [
    horizontalSlideAnimation,
    expandHeightAnimation,
  ]
})
export class ViewerSidebarComponent implements OnInit {

  constructor() {
  }

  @Input() tree: TreeNode[] = [];
  @Input() selectedNodeKey?: string;
  @Input() headerTitle?: string;
  @Input() treeToggleLabel?: string;
  @Input() enableTreeToggle?: boolean;
  @Input() headerOptions?: IAction[];
  @Output() onSelectedTreeNode: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
  headerOptionActiveIndex?: number;
  treeIsVisible = true;
  selectedNode?: TreeNode;


  ngOnInit(): void {
    this.selectedNode = this.getSelectedTreeNode();
  }

  onNodeSelect(): void {
    this.onSelectedTreeNode.emit(this.selectedNode);
  }

  /* getSelectedTreeNode, search the selected client in the treeNode with the same id from routes
  * @return: the TreeNode element that correspond to the selected id
  * */
  getSelectedTreeNode(): TreeNode | undefined {
    return this.tree.map((treeNode, nodeIndex) => {
      if (treeNode.key === this.selectedNodeKey) {
        return treeNode;
      } else if (treeNode.children && treeNode.children.length) {
        const childNode = treeNode.children.find(child => child.key === this.selectedNodeKey);
        if (childNode) {
          this.tree[nodeIndex] = {...this.tree[nodeIndex], expanded: true};
        }
        return childNode;
      } else {
        return;
      }
    }).filter(item => !!item)[0];
  }

  onClickHeaderOption($event: any, option: IAction, index: number): void {
    // reseting all active before set another
    this.headerOptions = this.headerOptions?.map(item => ({...item, isActive: false}));
    this.headerOptionActiveIndex = index;
    option.action($event);
  }
}
