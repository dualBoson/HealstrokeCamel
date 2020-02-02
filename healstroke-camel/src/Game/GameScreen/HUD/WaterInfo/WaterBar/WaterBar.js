import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import css from './WaterBar.module.css';

export default class WaterBar extends React.Component {

	render() {
		
		return (
			<div className={css.WaterBar}>
				<Bar
					orientation="vertical"
					color="blue"
					percentage={ this.props.waterPercentage }
				/>
			</div>
		);
	}
};
