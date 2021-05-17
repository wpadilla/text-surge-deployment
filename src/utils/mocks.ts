import { Campaign, IContactList } from '../app/core/interfaces';

export const campaignMock = [
  {
    id: 1,
    name: 'VA Dems',
    description: 'Justin Case for Governor 2021',
    endDate: new Date('05/07/2019'),
    tags: ['unassigned contacts', 'in progress'],
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

export const completedCampaignsMock = campaignMock.map(item => {
  return {
    ...item,
    tags: ['completed'],
  };
});

export const contactsListMock: IContactList[] = [
  {
    name: 'VA Dems Contact List',
    contactsQuantity: 100,
    createdDate: new Date(),
  },
  {
    name: 'Contact List 1',
    contactsQuantity: 98,
    createdDate: new Date('05/28/1999'),
  },
  {
    name: 'Contact List 2',
    contactsQuantity: 70,
    createdDate: new Date('05/28/2021'),
  },
  {
    name: 'Contact List 3',
    contactsQuantity: 105,
    createdDate: new Date('05/28/2017'),
  },
]
