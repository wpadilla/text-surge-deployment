import { ICampaign } from './campaign.interface';

export default interface IClient {
  id: number;
  Name: string;
  Campaigns: ICampaign[];
  Phone: string;
  isPrimary: number;
  Accounts: IClient[];
}
