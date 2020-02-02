import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './BrainBar.css';

export default class BrainBar extends React.Component{

	render() {
		
		return (
			<div className="Brain-Bar">
				<Bar
					orientation="horizontal"
					color="grey"
					percentage={ this.props.brainPercentage }
				/>
			</div>
		);
	}
};
