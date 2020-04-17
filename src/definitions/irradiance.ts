import utils from '../utils';

const RATIO = 1;

const irradiance = {
	metric: {
		baseUnit: 'W/m²',
		transform: (val: number) => {
			return val * RATIO;
		},
		'W/m²': {
			name: {
				singular: 'Watt/sqm',
				plural: 'Watts/sqm'
			},
			to_anchor: 1
		},
		'mW/m²': {
			name: {
				singular: 'Milliwatt/sqm',
				plural: 'Milliwatts/sqm'
			},
			to_anchor: 0.001
		},
		'kW/m²': {
			name: {
				singular: 'Kilowatt/sqm',
				plural: 'Kilowatts/sqm'
			},
			to_anchor: 1000
		},
		'MW/m²': {
			name: {
				singular: 'Megawatt/sqm',
				plural: 'MegaKilowatts/sqm'
			},
			to_anchor: 1000000
		}
	}
};
export default utils(irradiance);
