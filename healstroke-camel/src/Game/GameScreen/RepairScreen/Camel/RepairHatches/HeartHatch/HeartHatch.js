import React	from 'react';

import RepairHatchStructure from '../RepairHatchStructure/RepairHatchStructure';

import './HeartHatch.css';

export default class HeartHatch extends React.Component{

	render() {
		
		return (
			<RepairHatchStructure
				organHatchImage="Heart Hatch Image"
				open={this.props.open}
			/>
		);
	}
};
