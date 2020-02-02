import React	from 'react';

import OrganInfoStructure from '../OrganInfoStructure/OrganInfoStructure';
import SpareKidney from './SpareKidney/SpareKidney';
import KidneyBar from './KidneyBar/KidneyBar';

import css from './KidneyInfo.module.css';

export default class KidneyInfo extends React.Component {

	render() {
		
		return (
			<OrganInfoStructure
				gridArea="kidney"
				organImage="kidneyImage"
				spareOrgans={{
					type: <SpareKidney />,
					count: this.props.spareCount,
				}}
				organBar={ <KidneyBar	kidneyPercentage={this.props.kidneyPercentage} /> }
			/>
		);
	}
};
