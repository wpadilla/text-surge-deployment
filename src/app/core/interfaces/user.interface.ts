import IAssignment from './assignment.interface';
import IPermissions from './permission.interface';

export default interface IUser {
  Id: number;
  email: string;
  companyID: number;
  phone: string;
  profileImg: string;
  firstName: string;
  lastName: string;
  role: number;
  permission: IPermissions[];
  dlc: string;
  assignments: IAssignment[];
  hasAssignments: number;
  hasRequestForAssignments: number;
}

