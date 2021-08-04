import { ICampaign } from '../../app/core/interfaces';

export const campaignMock: ICampaign[] = [
  {
    id: 1,
    name: 'VA Dems',
    description: 'Justin Case for Governor 2021',
    endDate: new Date('05/07/2019'),
    tags: ['unassigned contacts', 'in progress'],
    target: 100,
    sent: 75,
    initialRate: 50,
    clientID: 1,
    timezone: 'UTC',
    clientRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalClientBudget: 100,
  } as ICampaign,
  {
    id: 2,
    name: 'Acme Alliance',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    endDate: new Date('05/07/2020'),
    tags: ['in progress', 'draft'],
    target: 50,
    sent: 35,
    initialRate: 50,
    clientID: 2,
    timezone: 'UTC',
    clientRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalClientBudget: 100,
  } as ICampaign,
  {
    id: 3,
    name: 'VA Dems',
    description: 'Aorem Ipsum Dolor Sit Amet',
    endDate: new Date('05/07/2021'),
    tags: ['not started'],
    target: 100,
    sent: 30,
    initialRate: 50,
    clientID: 3,
    timezone: 'UTC',
    clientRate: 7,
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    totalClientBudget: 100,
  } as ICampaign,
];

export const completedCampaignsMock: ICampaign[] = campaignMock.map(item => {
  return {
    ...item,
    tags: ['completed'],
  };
});


export const imageProfile2 = 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg';
export const imageProfile = 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg';
