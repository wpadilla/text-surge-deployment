import { ICampaign } from './campaign.interface';
import IUser from './user.interface';

export default interface IAssignment {
  id: number;
  // campaignID: ICampaign;
  campaign: ICampaign;
  user: IUser;
  sent: number;
  targetSent: number;
  endDate: Date;
  // non native properties
  replies: number;
}
