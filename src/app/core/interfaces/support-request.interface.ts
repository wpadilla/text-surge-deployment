import IUser from './user.interface';
import { ICampaign } from './campaign.interface';

export default interface ISupportRequest {
  id: number;
  companyID: number;
  // userID: IUser;
  user: IUser;
  priority: number;
  type: number;
  request: string;
  // non native properties
  requestTime: Date;
  campaign: ICampaign;
}
