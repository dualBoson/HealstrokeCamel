import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

export default class OrganBar extends React.Component {

	render() {
		
		return (
			<Bar
				orientation="horizontal"
				color={ this.props.organColor }
				percentage={ this.props.organPercentage }
			/>
		);
	}
};