import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import './HeatWave.css';

export default class HeatWave extends React.Component{

	render() {
		
		return (
			<div class="HeatWave">
				<ZoneStructure
					texture="HeatWave Texture"
				/>
			</div>
		);
	}
};
