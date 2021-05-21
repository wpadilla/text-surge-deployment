import IUser from "../../app/core/interfaces/user.interface";

export const textersMock: IUser[] = [
  {
    id: 1,
    email: 'example@example.com',
    companyId: 1,
    phone: '8094055541',
    profileImg: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
    firstName: 'John',
    lastName: 'Doe',
    role: 1,
    permission: [],
    dlc: '',
    assignments: {} as any,
    hasAssignments: 8,
    hasRequestForAssignments: 0,
  },
  {
    id: 2,
    email: 'example@example.com',
    companyId: 2,
    phone: '8094055532',
    profileImg: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
    firstName: 'Williams',
    lastName: 'Padilla',
    role: 2,
    permission: [],
    dlc: '',
    assignments: {} as any,
    hasAssignments: 10,
    hasRequestForAssignments: 0,
  },
  {
    id: 3,
    email: 'example@example.com',
    companyId: 3,
    phone: '8094055533',
    profileImg: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
    firstName: 'James',
    lastName: 'Twian',
    role: 3,
    permission: [],
    dlc: '',
    assignments: {} as any,
    hasAssignments: 11,
    hasRequestForAssignments: 0,
  },
  {
    id: 4,
    email: 'example@example.com',
    companyId: 4,
    phone: '8094055544',
    profileImg: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
    firstName: 'Peter',
    lastName: 'Brief',
    role: 4,
    permission: [],
    dlc: '',
    assignments: {} as any,
    hasAssignments: 11,
    hasRequestForAssignments: 0,
  },
];