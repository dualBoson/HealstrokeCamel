import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './HeartBar.css';

export default class HeartBar extends React.Component{

	render() {
		
		return (
			<div class="Heart-Bar">
				<Bar
					orientation="horizontal"
					color="red"
					percentage={ this.props.heartPercentage }
				/>
			</div>
		);
	}
};
