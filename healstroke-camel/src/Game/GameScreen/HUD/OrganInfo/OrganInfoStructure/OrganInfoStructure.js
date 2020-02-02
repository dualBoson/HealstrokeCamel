import React	from 'react';

import OrganSymbol from './OrganSymbol/OrganSymbol';
import OrganResources from './OrganResources/OrganResources';

import css from './OrganInfoStructure.module.css';

export default class OrganInfoStructure extends React.Component {

	render() {
		return (
			<div style={{ "grid-area": this.props.gridArea }} className={ css.OrganInfoStructure }>
				<OrganSymbol organImage={ this.props.organImage } />
				<OrganResources
					spareCount={ this.props.spareOrgans.count }
					organType={ this.props.spareOrgans.type }
					organBar={ this.props.organBar }
				/>
			</div>
		);
	}
};
