import React	from 'react';

import RepairHatchStructure from '../RepairHatchStructure/RepairHatchStructure';

import './KidneyHatch.css';

export default class KidneyHatch extends React.Component{

	render() {
		
		return (
			<RepairHatchStructure
				organHatchImage="Kidney Hatch Image"
				open={this.props.open}
			/>
		);
	}
};
