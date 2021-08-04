import IAssignment from '../../app/core/interfaces/assignment.interface';
import { usersMock } from './user.mock';
import { campaignMock } from './campaign.mock';

export const assignmentsMock: IAssignment[] = [
  {
    id: 1,
    campaign: campaignMock[0],
    user: usersMock[0],
    sent: 100,
    replies: 20,
    targetSent: 100,
    endDate: new Date(),
  },
  {
    id: 2,
    campaign: campaignMock[1],
    user: usersMock[1],
    sent: 75,
    replies: 10,
    targetSent: 100,
    endDate: new Date('10/05/2020'),
  },
  {
    id: 3,
    campaign: campaignMock[2],
    user: usersMock[2],
    sent: 50,
    replies: 1,
    targetSent: 100,
    endDate: new Date('05/05/2021'),
  }
];
