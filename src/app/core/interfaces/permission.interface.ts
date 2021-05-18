export default interface IPermissions {
  Id: number;
  Permissions: IPermission[];
}


export interface IPermission {
  Name: string;
  Actions: number;
  Role: number;
}
