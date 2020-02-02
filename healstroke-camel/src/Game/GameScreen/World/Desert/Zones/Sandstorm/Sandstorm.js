import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import './Sandstorm.css';

export default class Sandstorm extends React.Component{

	render() {
		
		return (
			<div className="Sandstorm">
				<ZoneStructure
					texture="Sandstorm Texture"
				/>
			</div>
		);
	}
};
