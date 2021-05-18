import { ICampaign } from './campaign.interface';
import IUser from './user.interface';

export default interface IAssignment {
  id: number;
  campaignID: ICampaign;
  user: IUser;
  Sent: number;
  targetSent: number;
  endDate: string;
}
