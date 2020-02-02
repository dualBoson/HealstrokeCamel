import React	from 'react';

import Bar from '@commonComp/Bar/Bar';

import css from './OrganBar.module.css';

export default class OrganBar extends React.Component {

	render() {
		
		return (
			<div className={css.OrganBar}>
				<Bar
					orientation="horizontal"
					color={ this.props.organColor }
					percentage={ this.props.organPercentage }
				/>
			</div>
		);
	}
};
