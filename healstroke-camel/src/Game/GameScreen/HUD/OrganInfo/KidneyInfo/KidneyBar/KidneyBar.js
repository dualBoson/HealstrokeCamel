import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import './KidneyBar.css';

export default class KidneyBar extends React.Component{

	render() {
		
		return (
			<div class="Kidney-Bar">
				<Bar
					orientation="horizontal"
					color="brown"
					percentage={ this.props.kidneyPercentage }
				/>
			</div>
		);
	}
};
