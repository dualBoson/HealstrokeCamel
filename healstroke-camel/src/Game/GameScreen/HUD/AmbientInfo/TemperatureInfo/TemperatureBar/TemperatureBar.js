import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './TemperatureBar.css';

export default class TemperatureBar extends React.Component{

	render() {
		
		return (
			<div className="Temperature-Bar">
				<Bar
					orientation="vertical"
					color="grey"
					percentage={ this.props.temperaturePercentage }
				/>
			</div>
		);
	}
};
