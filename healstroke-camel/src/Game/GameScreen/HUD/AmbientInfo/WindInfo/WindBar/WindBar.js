import React	from 'react';

import AmbientBar from '../../AmbientInfoStructure/AmbientBar/AmbientBar';

export default class WindBar extends React.Component {

	render() {
		
		return (
			<AmbientBar
				ambientColor="powderblue"
				ambientPercentage={ this.props.windPercentage }
			/>
		);
	}
};