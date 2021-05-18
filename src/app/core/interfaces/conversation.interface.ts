import IUser from './user.interface';
import IMessage from './message.interface';

export default interface IConversation {
  id: number;
  campaignID: number;
  dlcID: number;
  userID: number;
  Message: string;
  Assigned: IUser;
  Status: number;
  Phone: string;
  timeCreated: string;
  scriptID: number;
  Messages: IMessage[];
}
