import React	from 'react';

import css from './ZoneStructure.module.css';

export default class ZoneStructure extends React.Component {

	render() {
		
		return (
			<div className={css.ZoneStructure}>
				ZoneStructure
				{ this.props.texture }
			</div>
		);
	}
};
