import IUser from './user.interface';
import IClient from './client.interface';
import { ICampaign } from './campaign.interface';
import IPhoneNumber from './phone.interface';
import IDlc from './dlc.interface';

export default interface ICompany {
  id: number;
  name: string;
  phone: string;
  address: string;
  regions: any[];
  users: IUser[];
  clients: IClient[];
  campaigns: ICampaign[];
  lists: any[];
  phoneNumbers: IPhoneNumber[];
  dlcs: IDlc[];
  permissions: any[];
}

