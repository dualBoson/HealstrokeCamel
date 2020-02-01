import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import './Dunes.css';

export default class Dunes extends React.Component{

	render() {
		
		return (
			<div class="Dunes">
				<ZoneStructure
					texture="Dunes Texture"
				/>
			</div>
		);
	}
};
