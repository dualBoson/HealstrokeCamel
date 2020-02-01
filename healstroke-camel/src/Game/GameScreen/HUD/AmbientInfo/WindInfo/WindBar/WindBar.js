import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './WindBar.css';

export default class WindBar extends React.Component{

	render() {
		
		return (
			<div class="Wind-Bar">
				<Bar
					orientation="vertical"
					color="grey"
					percentage={ this.props.windPercentage }
				/>
			</div>
		);
	}
};
