import ArrayUtils from '../../src/utils/arrayUtil';

/* eslint-disable no-undef */
describe('Array Utils', () => {
  const component = new ArrayUtils();
  test('should groupBy array according with index', () => {
    const originArray = [{
      id: '1',
      email: 'mail1@mail.com',
      installmentPayment: true,
      clientId: '1',
    }, {
      id: '2',
      email: 'mail2@mail.com',
      installmentPayment: true,
      clientId: '2',
    },
    {
      id: '3',
      email: 'mail3@mail.com',
      installmentPayment: true,
      clientId: '1',
    }];

    const expectArray = {
      1: [
        {
          id: '1',
          email: 'mail1@mail.com',
          installmentPayment: true,
          clientId: '1',
        },
        {
          id: '3',
          email: 'mail3@mail.com',
          installmentPayment: true,
          clientId: '1',
        },
      ],
      2: [
        {
          id: '2',
          email: 'mail2@mail.com',
          installmentPayment: true,
          clientId: '2',
        },
      ],
    };
    const resp = component.groupBy(originArray, 'clientId');
    expect(resp).toEqual(expectArray);
  });
});