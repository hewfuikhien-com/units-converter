import utils from '../utils';

const RATIO = 1;

const power = {
  metric: {
    baseUnit: 'W',
    transform: (val: number) => {
      return val * RATIO;
    },
    W: {
      name: {
        singular: 'Watt',
        plural: 'Watts',
      },
      to_anchor: 1,
    },
    mW: {
      name: {
        singular: 'Milliwatt',
        plural: 'Milliwatts',
      },
      to_anchor: 0.001,
    },
    kW: {
      name: {
        singular: 'Kilowatt',
        plural: 'Kilowatts',
      },
      to_anchor: 1000,
    },
    MW: {
      name: {
        singular: 'Megawatt',
        plural: 'Megawatts',
      },
      to_anchor: 1000000,
    },
    GW: {
      name: {
        singular: 'Gigawatt',
        plural: 'Gigawatts',
      },
      to_anchor: 1000000000,
    },
  },
};
export default utils(power);
