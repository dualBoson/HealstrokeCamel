import React	from 'react';

import './SpareOrgan.css';

export default class SpareOrgan extends React.Component{

	render() {
		
		return (
			<div class="Spare-Organ">
				SpareOrgan
				{ this.props.image }
			</div>
		);
	}
};
