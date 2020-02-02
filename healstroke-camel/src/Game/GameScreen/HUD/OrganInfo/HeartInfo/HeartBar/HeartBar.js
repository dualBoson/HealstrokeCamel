import React	from 'react';

import OrganBar from '../../OrganInfoStructure/OrganBar/OrganBar';

export default class HeartBar extends React.Component {

	render() {
		
		return (
			<OrganBar
				organColor="darkred"
				organPercentage={ this.props.heartPercentage }
			/>
		);
	}
};
