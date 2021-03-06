import utils from '../utils';

const temperature = {
  metric: {
    baseUnit: 'C',
    transform: (val: number) => {
      return val / (5 / 9) + 32;
    },
    C: {
      name: {
        singular: 'degree Celsius',
        plural: 'degrees Celsius',
      },
      to_anchor: 1,
      anchor_shift: 0,
    },
    K: {
      name: {
        singular: 'degree Kelvin',
        plural: 'degrees Kelvin',
      },
      to_anchor: 1,
      anchor_shift: 273.15,
    },
  },
  imperial: {
    baseUnit: 'F',
    transform: (val: number) => {
      return (val - 32) * (5 / 9);
    },
    F: {
      name: {
        singular: 'degree Fahrenheit',
        plural: 'degrees Fahrenheit',
      },
      to_anchor: 1,
    },
    R: {
      name: {
        singular: 'degree Rankine',
        plural: 'degrees Rankine',
      },
      to_anchor: 1,
      anchor_shift: 459.67,
    },
  },
};

export default utils(temperature);
