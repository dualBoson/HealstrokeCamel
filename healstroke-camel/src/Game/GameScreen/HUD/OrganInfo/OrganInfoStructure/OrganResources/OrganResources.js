import React	from 'react';

import css from './OrganResources.module.css';

export default class OrganResources extends React.Component {

	render() {
		const spareOrgans = Array.from(
			{ length: this.props.spareCount },
			(_) => React.cloneElement( this.props.organType )
		);
		return (
			<div className={ css.OrganResources }>
				<div className={ css.spareOrgans }>
					{ spareOrgans }
				</div>
				{ this.props.organBar }
			</div>
		);
	}
};
