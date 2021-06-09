import IClient from "../../app/core/interfaces/client.interface";
import { campaignMock } from "./index";

export const secondaryClients: IClient[] = [
  {
    id: 4,
    name: 'Richmond Dems',
    campaigns: campaignMock.slice(1, 2),
    phone: '(809) 444-5555',
    createdAt: new Date('05/28/1999'),
  },
  {
    id: 5,
    name: 'Secondary',
    campaigns: campaignMock.slice(1, 3),
    phone: '(809) 444-5555',
    createdAt: new Date(),
  },
];

export const clientMock: IClient[] = [
  {
    id: 1,
    name: 'Va Dems',
    campaigns: campaignMock,
    phone: '(809) 444-5555',
    createdAt: new Date('06/15/1999'),
    isPrimary: true,
    accounts: secondaryClients,
  },
  {
    id: 2,
    name: 'Acme Alliance',
    campaigns: campaignMock.slice(0, 1),
    phone: '(809) 444-5555',
    createdAt: new Date('12/12/2012'),
    isPrimary: true,
    accounts: secondaryClients.slice(1, 2),
  },
  {
    id: 3,
    name: 'Umbrella Campaigns',
    campaigns: campaignMock.slice(0, 2),
    phone: '(809) 444-5555',
    createdAt: new Date(),
    isPrimary: true,
  },
];

