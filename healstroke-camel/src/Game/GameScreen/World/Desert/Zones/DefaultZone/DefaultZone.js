import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import './DefaultZone.css';

export default class DefaultZone extends React.Component{

	render() {
		
		return (
			<div className="DefaultZone">
				<ZoneStructure
					texture="DefaultZone Texture"
				/>
			</div>
		);
	}
};
