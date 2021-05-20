import IPhoneNumber from '../../app/core/interfaces/phone.interface';

export const phoneNumbersMock: IPhoneNumber[] = [
  {
    phone: '8094055531',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'Williams',
    lastName: 'Padilla',
    status: 1,
    optOut: 1,
    timeCreated: new Date('28/05/1999'),
    timeUpdated: new Date(),
    location: 'California'
  },
  {
    phone: '8099999999',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'Ted',
    lastName: 'Smith',
    status: 1,
    optOut: 1,
    timeCreated: new Date('28/05/2017'),
    timeUpdated: new Date(),
    location: 'Boston'
  },
  {
    phone: '8098888888',
    companyID: 1,
    validatedOn: 'string',
    firstName: 'John',
    lastName: 'Doe',
    status: 1,
    optOut: 1,
    timeCreated: new Date('28/05/2020'),
    timeUpdated: new Date(),
    location: 'Virginia'
  },
];
