import utils from '../utils';

const RATIO = 4.44822;

const force = {
  metric: {
    baseUnit: 'N',
    transform: (val: number) => {
      return (val * 1) / RATIO;
    },
    N: {
      name: {
        singular: 'Newton',
        plural: 'Newtons',
      },
      to_anchor: 1,
    },
    kN: {
      name: {
        singular: 'Kilonewton',
        plural: 'Kilonewtons',
      },
      to_anchor: 1000,
    },
  },
  imperial: {
    baseUnit: 'lbf',
    transform: (val: number) => {
      return RATIO * val;
    },
    lbf: {
      name: {
        singular: 'Pound-force',
        plural: 'Pound-forces',
      },
      to_anchor: 1,
    },
  },
};

export default utils(force);
