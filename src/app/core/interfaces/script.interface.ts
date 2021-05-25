export default interface IScript {
  id: number;
  description: string;
  script: string;
  type: number;
  campaignID: number;
  dataFields: string[];
  dataMap: string[];
}
