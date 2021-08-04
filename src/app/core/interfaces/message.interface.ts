export default interface IMessage {
  id?: number;
  conversationID?: number;
  phone?: string;
  status?: number;
  sms: string;
  reply?: number;
  userID?: number;
  timeSent: Date;
  archived?: number;
  type: 'incoming' | 'outgoing';
  transmitter: string;
}
