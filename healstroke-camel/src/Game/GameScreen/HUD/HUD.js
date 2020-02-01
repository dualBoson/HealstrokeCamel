import React	from 'react';

import Map from './Map/Map';
import WaterInfo from './WaterInfo/WaterInfo';
import AmbientInfo from './AmbientInfo/AmbientInfo';
import OrganInfo from './OrganInfo/OrganInfo';
import FullScreenToggleButton from './FullScreenToggleButton/FullScreenToggleButton';

import './HUD.css';

export default class HUD extends React.Component{

	render() {
		
		return (
			<div>
				<Map />
				<WaterInfo />
				<AmbientInfo />
				<OrganInfo />
				<FullScreenToggleButton />
			</div>
		);
	}
};
