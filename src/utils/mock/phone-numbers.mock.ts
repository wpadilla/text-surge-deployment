import IPhoneNumber, { IOptedBackContact } from '../../app/core/interfaces/phone.interface';
import { usersMock } from './user.mock';
import { IContactList } from '../../app/core/interfaces';

export const phoneNumbersMock: IPhoneNumber[] = [
  {
    phone: '8094055531',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'Williams',
    lastName: 'Padilla',
    status: 'replied',
    optOut: 1,
    timeCreated: new Date('28/05/1999'),
    timeUpdated: new Date(),
    location: 'California',
    city: 'Virginia',
    script: 'Script 1',
    source: 'Virginia',
    tag: 'subscribed',
    zip: 23456,
    contactLists: ['Va Dems Contact List', 'Contact List 2'],
  },
  {
    phone: '8099999999',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'Ted',
    lastName: 'Smith',
    status: 'bounced',
    optOut: 1,
    timeCreated: new Date('28/05/2017'),
    timeUpdated: new Date(),
    location: 'Boston',
    city: 'Virginia',
    script: 'Script 2',
    source: 'Virginia',
    tag: 'subscribed',
    zip: 23456,
    contactLists: ['Va Dems Contact List'],
  },
  {
    phone: '8098888888',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'John',
    lastName: 'Doe',
    status: 'not sent',
    optOut: 1,
    timeCreated: new Date('28/05/2020'),
    timeUpdated: new Date(),
    location: 'Virginia',
    city: 'Virginia',
    script: 'Script 3',
    source: 'Virginia',
    tag: 'unsubscribed',
    zip: 23456,
    contactLists: ['Va Dems Contact List', 'Contact List 1'],
  },
  {
    phone: '8098888888',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'John',
    lastName: 'Doe',
    status: 'sent',
    optOut: 1,
    timeCreated: new Date('28/05/2020'),
    timeUpdated: new Date(),
    location: 'Virginia',
    city: 'Virginia',
    script: 'Script 3',
    source: 'Virginia',
    tag: 'opted out',
    zip: 23456,
    contactLists: ['Va Dems Contact List'],
  },
];

export const optedBackContactsMock: IOptedBackContact[] = [{
  phone: '(809) 999-9999',
  firstName: 'John',
  lastName: 'Doe',
  reason: 'Opted out by mistake',
  requester: usersMock[2],
  timeCreated: new Date('05/28/1999'),
  timeUpdated: new Date(),
}];

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
];
