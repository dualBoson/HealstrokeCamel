import React	from 'react';

import SteepnessInfo from './SteepnessInfo/SteepnessInfo';
import TemperatureInfo from './TemperatureInfo/TemperatureInfo';
import WindInfo from './WindInfo/WindInfo';

import './AmbientInfo.css';

export default class AmbientInfo extends React.Component{

	render() {
		
		return (
			<div>
				<SteepnessInfo />
				<TemperatureInfo />
				<WindInfo />
			</div>
		);
	}
};
