import IAssignment from './assignment.interface';
import IPermissions from './permission.interface';

export default interface IUser {
  id: number;
  email: string;
  companyId: number;
  phone: string;
  profileImg: string;
  firstName: string;
  lastName: string;
  role: number | 'Owner' | 'Account Administrator';
  permission: IPermissions[];
  dlc: string;
  assignments: IAssignment[];
  hasAssignments: number;
  hasRequestForAssignments: number;
  request: string;
  requestTime: Date;
}

