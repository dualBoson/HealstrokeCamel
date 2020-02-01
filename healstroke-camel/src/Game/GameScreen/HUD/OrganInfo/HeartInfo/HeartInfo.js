import React	from 'react';

import OrganInfoStructure from '../OrganInfoStructure/OrganInfoStructure';
import SpareHeart from './SpareHeart/SpareHeart';
import HeartBar from './HeartBar/HeartBar';

import './HeartInfo.css';

export default class HeartInfo extends React.Component{

	render() {
		
		return (
			<OrganInfoStructure
				spareOrgans={{
					type: <SpareHeart />,
					count: this.props.organCount
				}}
				organBar={ <HeartBar /> }
			/>
		);
	}
};

