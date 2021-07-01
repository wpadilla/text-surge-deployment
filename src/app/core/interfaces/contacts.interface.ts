import IClient from './client.interface';

export interface IContactList {
  name: string;
  contactsQuantity: number;
  createdDate: Date;
  client: IClient;
}
