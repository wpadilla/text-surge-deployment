import IPhoneNumber from './phone.interface';
import IUser from './user.interface';

export default interface IDlc {
  Id: number;
  companyID: number;
  Phone: IPhoneNumber;
  Assigned: IUser;
}
