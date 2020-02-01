import React	from 'react';

import HeartHatch from './RepairHatches/HeartHatch/HeartHatch';
import KidneyHatch from './RepairHatches/KidneyHatch/KidneyHatch';

import './Camel.css';

export default class Camel extends React.Component{

	render() {
		
		return (
			<div class="Camel">
				Camel Image
				<div class="Camel-Left-Hatch">
					<KidneyHatch />
				</div>
				<div class="Camel-Right-Hatch">
					<HeartHatch />
				</div>
			</div>
		);
	}
};
