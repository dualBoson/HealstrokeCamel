import React	from 'react';

import './ZoneStructure.css';

export default class ZoneStructure extends React.Component{

	render() {
		
		return (
			<div class="Zone-Structure">
				ZoneStructure
				{ this.props.texture }
			</div>
		);
	}
};
