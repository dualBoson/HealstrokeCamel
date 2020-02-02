import React	from 'react';

import OrganBar from '../../OrganInfoStructure/OrganBar/OrganBar';

export default class KidneyBar extends React.Component {

	render() {
		
		return (
			<OrganBar
				organColor="brown"
				organPercentage={ this.props.kidneyPercentage }
			/>
		);
	}
};
