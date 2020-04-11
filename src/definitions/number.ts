import utils from '../utils';

const number = {
  metric: {
    baseUnit: 'da',
    transform: (val: number) => {
      return val * 1;
    },
    da: {
      name: {
        singular: '-',
        plural: '-',
      },
      to_anchor: 1,
    },
    // h: {
    //   name: {
    //     singular: 'Hundred',
    //     plural: 'Hundred',
    //   },
    //   to_anchor: 100,
    // },
    K: {
      name: {
        singular: 'Thousand',
        plural: 'Thousand',
      },
      to_anchor: 1000,
    },
    M: {
      name: {
        singular: 'Million',
        plural: 'Million',
      },
      to_anchor: 1000000,
    },
    B: {
      name: {
        singular: 'Billion',
        plural: 'Billion',
      },
      to_anchor: 1000000000,
    },
    T: {
      name: {
        singular: 'Trillion',
        plural: 'Trillion',
      },
      to_anchor: 1000000000000,
    },
  },
};

export default utils(number);
