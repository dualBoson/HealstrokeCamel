import React	from 'react';

import SteepnessInfo from './SteepnessInfo/SteepnessInfo';
import TemperatureInfo from './TemperatureInfo/TemperatureInfo';
import WindInfo from './WindInfo/WindInfo';

import css from './AmbientInfo.module.css';

export default class AmbientInfo extends React.Component {

	render() {
		
		return (
			<div className={css.AmbientInfo}>
				<SteepnessInfo steepnessPercentage="40%"/>
				<TemperatureInfo temperaturePercentage="50%"/>
				<WindInfo windPercentage="60%"/>
			</div>
		);
	}
};
