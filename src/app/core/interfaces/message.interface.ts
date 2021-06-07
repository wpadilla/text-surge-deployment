export default interface IMessage {
  id: number;
  conversationID: number;
  phone: string;
  status: number;
  sms: string;
  reply: number;
  userID: number;
  timeSent: string;
  archived: number;
}
