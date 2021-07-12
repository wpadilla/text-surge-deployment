import IClient from './client.interface';

export interface IContactList {
  id: number;
  name: string;
  contactsQuantity: number;
  createdDate: Date;
  client: IClient;
}
