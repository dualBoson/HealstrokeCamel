import React	from 'react';

import OrganInfoStructure from '../OrganInfoStructure/OrganInfoStructure';
import BrainBar from './BrainBar/BrainBar';

import './BrainInfo.css';

export default class BrainInfo extends React.Component{

	render() {
		
		return (
			<OrganInfoStructure
				spareOrgans={{
					type: null,
					count: 0,
				}}
				organBar={ <BrainBar /> }
			/>
		);
	}
};
