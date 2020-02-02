import React	from 'react';

import AmbientBar from '../../AmbientInfoStructure/AmbientBar/AmbientBar';

export default class TemperatureBar extends React.Component {

	render() {
		
		return (
			<AmbientBar
				ambientColor="orangered"
				ambientPercentage={ this.props.temperaturePercentage }
			/>
		);
	}
};