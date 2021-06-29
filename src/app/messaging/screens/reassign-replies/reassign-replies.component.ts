import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import IAssignment from '../../../core/interfaces/assignment.interface';
import IUser from '../../../core/interfaces/user.interface';
import { assignmentsMock, usersMock } from '../../../../utils/mock';

@Component({
  selector: 'ts-reassign-replies',
  templateUrl: './reassign-replies.component.html',
  styleUrls: ['./reassign-replies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class ReassignRepliesComponent implements OnInit {

  constructor() {
  }
  isTexterDialogOpen?: boolean;
  texters: IUser[] = usersMock;
  filteredTexters: IUser[] = [];
  texterSelected: IUser = {} as any;
  sortByProperties: ISortBy[] = [
    {
      property: 'replies',
      label: 'Number of Replies',
      reversed: true,
    },
    {
      property: 'user.firstName',
      label: 'Campaign Name'
    }
  ];
  reassignReplies = assignmentsMock;
  filteredReassignReplies: IAssignment[] = [];

  ngOnInit(): void {

  }
  setReassignRepliesFilteredData(data: IAssignment[]): void {
    this.filteredReassignReplies = data;
  }

  setFilteredTexters(data: any[]): void {
    this.filteredTexters = data;
  }
}
