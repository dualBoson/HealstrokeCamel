import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

export default class WaterBar extends React.Component {

	render() {
		
		return (
			<Bar
				orientation="vertical"
				color="blue"
				percentage={ this.props.waterPercentage }
			/>
		);
	}
};
