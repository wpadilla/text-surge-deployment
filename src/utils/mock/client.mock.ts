import IClient from "../../app/core/interfaces/client.interface";
import { campaignMock } from "./index";

export const secondaryClients: IClient[] = [
  {
    id: 4444,
    name: 'Richmond Dems',
    campaigns: campaignMock.slice(1, 2),
    phone: '(809) 444-5555',
  },
  {
    id: 2222,
    name: 'Secondary',
    campaigns: campaignMock.slice(1, 3),
    phone: '(809) 444-5555',
  },
];

export const clientMock: IClient[] = [
  {
    id: 1,
    name: 'Va Dems',
    campaigns: campaignMock,
    phone: '(809) 444-5555',
    isPrimary: true,
    accounts: secondaryClients,
  },
  {
    id: 2,
    name: 'Acme Alliance',
    campaigns: campaignMock,
    phone: '(809) 444-5555',
    isPrimary: true,
    accounts: secondaryClients.slice(0,1),
  },
  {
    id: 3,
    name: 'Umbrella Campaigns',
    campaigns: campaignMock,
    phone: '(809) 444-5555',
    isPrimary: true,
  },
];

