import IUser from "./user.interface";

export default interface IPhoneNumber {
  phone: string;
  companyID: number;
  validatedOn: string;
  firstName: string;
  lastName: string;
  location: string;
  city: string;
  script: string;
  source: string;
  tag: string;
  zip: number;
  status: number | string;
  optOut: number;
  timeCreated: Date;
  timeUpdated: Date;
  contactLists: string[];
}

export interface IOptedBackContact {
  phone: string;
  firstName: string;
  lastName: string;
  reason: string;
  requester: IUser;
  timeCreated: Date;
  timeUpdated: Date;
};
