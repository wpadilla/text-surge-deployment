import { ICampaign } from './campaign.interface';

export default interface IClient {
  id: number;
  name: string;
  campaigns: ICampaign[];
  phone: string;
  isPrimary?: boolean;
  accounts?: IClient[];
}
