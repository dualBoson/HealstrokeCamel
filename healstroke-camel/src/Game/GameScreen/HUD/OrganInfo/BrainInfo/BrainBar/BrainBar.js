import React	from 'react';

import OrganBar from '../../OrganInfoStructure/OrganBar/OrganBar';

export default class BrainBar extends React.Component {

	render() {
		
		return (
			<OrganBar
				organColor="whitesmoke"
				organPercentage={ this.props.brainPercentage }
			/>
		);
	}
};
