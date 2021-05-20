export default interface IScript {
  Id: number;
  Description: string;
  Script: string;
  Type: number;
  campaignID: number;
  dataFields: string[];
  dataMap: string[];
}
