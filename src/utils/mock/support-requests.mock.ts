import ISupportRequest from '../../app/core/interfaces/support-request.interface';
import { usersMock } from './user.mock';
import { campaignMock } from './index';

export const selfAssignmentsRequestMock: ISupportRequest[] = [
  {
    id: 1,
    companyID: 2,
    user: usersMock[0],
    priority: 1,
    type: 1,
    request: '500 messages with replies',
    requestTime: new Date(),
    campaign: campaignMock[1],
  },
  {
    id: 2,
    companyID: 2,
    user: usersMock[1],
    priority: 1,
    type: 1,
    request: '150 Replies',
    requestTime: new Date('05/05/2021'),
    campaign: campaignMock[0],
  }
];
