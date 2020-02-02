import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import css from './AmbientBar.module.css';

export default class AmbientBar extends React.Component {

	render() {
		
		return (
			<div className={css.AmbientBar}>
				<Bar
					orientation="vertical"
					color={ this.props.ambientColor }
					percentage={ this.props.ambientPercentage }
				/>
			</div>
		);
	}
};
