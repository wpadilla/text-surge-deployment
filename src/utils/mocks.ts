import { Campaign } from '../app/core/interfaces';

export const campaignMock = [
  {
    id: 1,
    name: 'VA Dems',
    description: 'Justin Case for Governor 2021',
    endDate: new Date('05/07/2019'),
    tags: ['unassigned contacts', 'in progress', 'completed'],
    target: 100,
    sent: 75,
    replyRate: 50,
  } as Campaign,
  {
    id: 2,
    name: 'Acme Alliance',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    endDate: new Date('05/07/2020'),
    tags: ['in progress'],
    target: 50,
    sent: 35,
    replyRate: 50,
  } as Campaign,
  {
    id: 3,
    name: 'VA Dems',
    description: 'Aorem Ipsum Dolor Sit Amet',
    endDate: new Date('05/07/2021'),
    tags: ['not started'],
    target: 100,
    sent: 30,
    replyRate: 50,
  } as Campaign
];
