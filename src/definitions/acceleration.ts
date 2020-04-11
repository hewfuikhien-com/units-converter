import utils from '../utils';

const acceleration = {
  metric: {
    baseUnit: 'g-force',
    transform: (val: number) => {
      return val * 1;
    },
    'g-force': {
      name: {
        singular: 'g-force',
        plural: 'g-forces',
      },
      to_anchor: 9.80665,
    },
    'm/s2': {
      name: {
        singular: 'Metre per second squared',
        plural: 'Metres per second squared',
      },
      to_anchor: 1,
    },
  },
};

export default utils(acceleration);
