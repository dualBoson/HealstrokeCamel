import React	from 'react';

import SpareOrgan from '../../OrganInfoStructure/SpareOrgan/SpareOrgan';

import './SpareHeart.css';

export default class SpareHeart extends React.Component{

	render() {
		
		return (
			<div class="Spare-Heart">
				<SpareOrgan
					image="Spare Heart Image"
				/>
			</div>
		);
	}
};
