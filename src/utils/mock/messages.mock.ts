import IMessage from '../../app/core/interfaces/message.interface';

export const messagesMock: IMessage[] = [{
  id: 1,
  conversationID: 1,
  phone: '8099999999',
  status: 1,
  sms: 'Message #1',
  reply: 1,
  userID: 1,
  timeSent: 'aug 18 2021',
  archived: 1,
}
];

export const fakeMessageMock = [
  {
    texter: {
      name: 'John Doe',
      profile: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg'
    },
    phone: '(809) 888-8888',
    contact: {
      name: 'John Roussel',
      phone: '(809) 999-9999',
    },
    date: new Date(),
    type: 'outgoing',
  },
  {
    texter: {
      name: 'Andrew Pie',
      profile: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg'
    },
    phone: '(809) 888-8888',
    contact: {
      name: 'Peter Winston',
      phone: '(809) 999-9978',
    },
    date: new Date('05/05/2005'),
    type: 'incoming',
  },
  {
    texter: {
      name: 'Jim Corse',
      profile: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg'
    },
    phone: '(809) 888-9999',
    contact: {
      name: 'Anderson Fry',
      phone: '(809) 999-9978',
    },
    date: new Date(),
    type: 'outgoing',
  }
];
