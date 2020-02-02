import React	from 'react';

import OrganInfoStructure from '../OrganInfoStructure/OrganInfoStructure';
import SpareHeart from './SpareHeart/SpareHeart';
import HeartBar from './HeartBar/HeartBar';

import css from './HeartInfo.module.css';

export default class HeartInfo extends React.Component {

	render() {
		
		return (
			<OrganInfoStructure
				gridArea="heart"
				spareOrgans={{
					type: <SpareHeart />,
					count: this.props.spareCount,
				}}
				organBar={ <HeartBar  heartPercentage={this.props.heartPercentage} /> }
			/>
		);
	}
};

