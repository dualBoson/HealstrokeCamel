import React	from 'react';

import Dunes from './Zones/Dunes/Dunes';
import HeatWave from './Zones/HeatWave/HeatWave';
import Sandstorm from './Zones/Sandstorm/Sandstorm';
import DefaultZone from './Zones/DefaultZone/DefaultZone';

//import DesertZoneDistribution

import css from './Desert.module.css';

export default class Desert extends React.Component {

	render() {
		//const zonesPositionList = {
		//	dunes: [
		//		{ x: 1,	y: 1 },
		//		{ x: 5,	y: 3 }
		//	],
		//	heatWave: [
		//		{ x: 7,	y: 1 },
		//		{ x: 4,	y: 8 }
		//	],
		//	sandstorm: [
		//		{ x: 4,	y: 7 },
		//		{ x: 9,	y: 5 }
		//	]
		//};
		//
		//const visibleSize = {
		//	width: 16,
		//	height: 9
		//};
		//
		//const grid = Array.from(
		//	{ length: visibleSize.height * visibleSize.width },
		//	(_, index) => {
		//		React.cloneElement( <DefaultZone />/*, props*/ )
		//	}
		//);

		//for() {}

		const componentGrid = [
			<DefaultZone />, <DefaultZone />, <HeatWave />, <DefaultZone />,
			<DefaultZone />, <Sandstorm />, <Dunes />, <DefaultZone />,
			<DefaultZone />, <HeatWave />, <Dunes />, <DefaultZone />,
			<DefaultZone />, <HeatWave />, <DefaultZone />, <Sandstorm />,
		]
		
		return (
			<div className={css.Desert}>
				{ componentGrid }
			</div>
		);
	}
};
