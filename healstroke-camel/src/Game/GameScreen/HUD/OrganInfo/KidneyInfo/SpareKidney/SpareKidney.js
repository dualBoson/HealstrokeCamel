import React	from 'react';

import SpareOrgan from '../../OrganInfoStructure/SpareOrgan/SpareOrgan';

import './SpareKidney.css';

export default class SpareKidney extends React.Component{

	render() {
		
		return (
			<div className="Spare-Kidney">
				<SpareOrgan
					image="Spare Kidney Image"
				/>
			</div>
		);
	}
};
