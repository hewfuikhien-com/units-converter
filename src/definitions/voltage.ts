import utils from '../utils';

const RATIO = 1;

const voltage = {
  metric: {
    baseUnit: 'V',
    transform: (val: number) => {
      return val * RATIO;
    },
    V: {
      name: {
        singular: 'Volt',
        plural: 'Volts',
      },
      to_anchor: 1,
    },
    mV: {
      name: {
        singular: 'Millivolt',
        plural: 'Millivolts',
      },
      to_anchor: 0.001,
    },
    kV: {
      name: {
        singular: 'Kilovolt',
        plural: 'Kilovolts',
      },
      to_anchor: 1000,
    },
  },
};

export default utils(voltage);
