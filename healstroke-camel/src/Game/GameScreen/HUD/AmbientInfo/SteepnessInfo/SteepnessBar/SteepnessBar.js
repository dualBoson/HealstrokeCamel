import React	from 'react';

import AmbientBar from '../../AmbientInfoStructure/AmbientBar/AmbientBar';

export default class SteepnessBar extends React.Component {

	render() {
		
		return (
			<AmbientBar
				ambientColor="olive"
				ambientPercentage={ this.props.steepnessPercentage }
			/>
		);
	}
};