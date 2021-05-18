import IUser from './user.interface';

export default interface ISupportRequest {
  id: number;
  companyID: number;
  userID: IUser;
  priority: number;
  type: number;
  request: string;
}
