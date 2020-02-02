import React	from 'react';

import HeartHatch from './RepairHatches/HeartHatch/HeartHatch';
import KidneyHatch from './RepairHatches/KidneyHatch/KidneyHatch';

import './Camel.css';

export default class Camel extends React.Component{

	render() {
		
		return (
			<div className="Camel">
				Camel Image
				<div className="Camel-Left-Hatch">
					<KidneyHatch />
				</div>
				<div className="Camel-Right-Hatch">
					<HeartHatch />
				</div>
			</div>
		);
	}
};
