import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './WaterBar.css';

export default class WaterBar extends React.Component{

	render() {
		
		return (
			<div className="Water-Bar">
				<Bar
					orientation="vertical"
					color="blue"
					percentage={ this.props.waterPercentage }
				/>
			</div>
		);
	}
};
