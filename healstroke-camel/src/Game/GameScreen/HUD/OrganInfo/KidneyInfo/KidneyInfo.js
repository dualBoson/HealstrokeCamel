import React	from 'react';

import OrganInfoStructure from '../OrganInfoStructure/OrganInfoStructure';
import SpareKidney from './SpareKidney/SpareKidney';
import KidneyBar from './KidneyBar/KidneyBar';

import css from './KidneyInfo.module.css';

export default class KidneyInfo extends React.Component {

	render() {
		
		return (
			<OrganInfoStructure
				spareOrgans={{
					type: <SpareKidney />,
					count: this.props.organCount,
				}}
				organBar={ <KidneyBar   kidneyPercentage={this.props.kidneyPercentage} /> }
			/>
		);
	}
};
