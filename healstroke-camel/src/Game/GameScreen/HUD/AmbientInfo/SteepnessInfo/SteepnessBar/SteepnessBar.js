import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './SteepnessBar.css';

export default class SteepnessBar extends React.Component{

	render() {
		
		return (
			<div class="Steepness-Bar">
				<Bar
					orientation="vertical"
					color="grey"
					percentage={ this.props.steepnessPercentage }
				/>
			</div>
		);
	}
};
