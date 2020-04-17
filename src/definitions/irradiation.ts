import utils from '../utils';

const RATIO = 1;

const irradiation = {
	metric: {
		baseUnit: 'Wh/m²',
		transform: (val: number) => {
			return RATIO * val;
		},
		'Wh/m²': {
			name: {
				singular: 'Watt-hour/sqm',
				plural: 'Watt-hours/sqm'
			},
			to_anchor: 3600
		},
		'mWh/m²': {
			name: {
				singular: 'Milliwatt-hour/sqm',
				plural: 'Milliwatt-hours/sqm'
			},
			to_anchor: 3.6
		},
		'kWh/m²': {
			name: {
				singular: 'Kilowatt-hour/sqm',
				plural: 'Kilowatt-hours/sqm'
			},
			to_anchor: 3600000
		},
		'MWh/m²': {
			name: {
				singular: 'Megawatt-hour/sqm',
				plural: 'Megawatt-hours/sqm'
			},
			to_anchor: 3600000000
		},
		'GWh/m²': {
			name: {
				singular: 'Gigawatt-hour/sqm',
				plural: 'Gigawatt-hours/sqm'
			},
			to_anchor: 3600000000000
		}
	}
};

export default utils(irradiation);
