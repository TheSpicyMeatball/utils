/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sortReduceDate } = require('../../../dist/lib/es5/index');

describe('sortReduceDate', () => {
  test('basic', () => {
    expect(sortReduceDate('stamp')({ stamp: '03/20/2020' })).toStrictEqual('20200220');
    expect(sortReduceDate('stamp')({ stamp: '12/20/2020' })).toStrictEqual('20201120');
    expect(sortReduceDate('stamp')({ stamp: new Date(2020, 9, 7) })).toStrictEqual('20200907');
    expect(sortReduceDate('stamp')({ stamp: new Date(2020, 11, 20) })).toStrictEqual('20201120');
  });

  test('time', () => {
    expect(sortReduceDate('stamp', 's')({ stamp: '2020-10-20T14:48:25.000' })).toStrictEqual('20200920144825');
    expect(sortReduceDate('stamp', 's')({ stamp: '2020-10-20T14:48:00.000' })).toStrictEqual('20200920144800');
    expect(sortReduceDate('stamp', 'm')({ stamp: '2020-10-20T14:48:00.000' })).toStrictEqual('202009201448');
    expect(sortReduceDate('stamp', 'h')({ stamp: '2020-10-20T14:48:25.000' })).toStrictEqual('2020092014');
    expect(sortReduceDate('stamp', 's')({ stamp: new Date(2020, 9, 20, 14, 48, 0, 0) })).toStrictEqual('20200920144800');
  });

  test('empty', () => {
    expect(sortReduceDate('stamp')({})).toStrictEqual(null);
    expect(sortReduceDate('stamp')(null)).toStrictEqual(null);
    expect(sortReduceDate('stamp')(undefined)).toStrictEqual(null);
  });
});