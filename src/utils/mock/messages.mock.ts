import IMessage from '../../app/core/interfaces/message.interface';

export const messagesMock: IMessage[] = [{
  id: 1,
  conversationID: 1,
  phone: '8099999999',
  status: 1,
  sms: 'Message #1',
  reply: 1,
  userID: 1,
  timeSent: new Date(),
  archived: 1,
  transmitter: 'John Doe',
  type: 'incoming',
}
];

export const fakeMessageMock = [
  {
    id: 1,
    unread: true,
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
    note: 'Archived by Texter',
    campaign: {
      description: 'Justin Case for Governor 2021',
      client: 'Va Dems',
    }
  },
  {
    id: 2,
    unread: false,
    texter: {
      name: 'Williams Padilla',
      profile: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg'
    },
    phone: '(809) 888-8888',
    contact: {
      name: 'Peter Winston',
      phone: '(809) 999-9978',
    },
    date: new Date('05/05/2005'),
    type: 'incoming',
    note: 'Reassigned',
    campaign: {
      description: 'Aorem Ipsum Dolor Sit Amet',
      client: 'Client 2',
    }
  },
  {
    id: 3,
    unread: false,
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
    note: 'Campaign Completed',
    campaign: {
      description: 'This is an example of complete Campaign',
      client: 'Acme Alias',
    },
  },
  {
    id: 4,
    unread: false,
    texter: {
      name: 'Peter Brief',
      profile: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg'
    },
    phone: '(809) 888-9999',
    contact: {
      name: 'James Fry',
      phone: '(809) 999-9978',
    },
    date: new Date(),
    type: 'outgoing',
    note: 'Campaign Completed',
    campaign: {
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur',
      client: 'Acme Alias',
    },
  }
];
