import { ICampaign, IContactList } from '../../app/core/interfaces';

export const campaignMock: ICampaign[] = [
  {
    id: 1,
    name: 'VA Dems',
    description: 'Justin Case for Governor 2021',
    endDate: new Date('05/07/2019'),
    tags: ['unassigned contacts', 'in progress'],
    target: 100,
    sent: 75,
    replyRate: 50,
    clientID: 1,
    timezone: 'UTC',
    sendRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalBudget: 100,
  } as ICampaign,
  {
    id: 2,
    name: 'Acme Alliance',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    endDate: new Date('05/07/2020'),
    tags: ['in progress', 'draft'],
    target: 50,
    sent: 35,
    replyRate: 50,
    clientID: 2,
    timezone: 'UTC',
    sendRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalBudget: 100,
  } as ICampaign,
  {
    id: 3,
    name: 'VA Dems',
    description: 'Aorem Ipsum Dolor Sit Amet',
    endDate: new Date('05/07/2021'),
    tags: ['not started'],
    target: 100,
    sent: 30,
    replyRate: 50,
    clientID: 3,
    timezone: 'UTC',
    sendRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalBudget: 100,
  } as ICampaign,
  {
    id: 4,
    name: 'VA Dems',
    description: 'This is an example of complete Campaign',
    endDate: new Date('05/07/2021'),
    tags: ['completed'],
    target: 100,
    sent: 30,
    replyRate: 50,
    clientID: 4,
    timezone: 'UTC',
    sendRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalBudget: 100,
  } as ICampaign
];

export const completedCampaignsMock: ICampaign[] = campaignMock.map(item => {
  return {
    ...item,
    tags: ['completed'],
  };
});

export const campaignsContactsListMock: IContactList[] = [
  {
    name: 'Justin Case for Governor 2021',
    contactsQuantity: 100,
    createdDate: new Date(),
  },
  {
    name: 'Campaign 1',
    contactsQuantity: 98,
    createdDate: new Date('05/28/1999'),
  },
  {
    name: 'Campaign 2',
    contactsQuantity: 70,
    createdDate: new Date('05/28/2021'),
  },
  {
    name: 'Campaign 3',
    contactsQuantity: 105,
    createdDate: new Date('05/28/2017'),
  },
];

export const imageProfile2 = 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg';
export const imageProfile = 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg';
