import React	from 'react';

import WaterBar from './WaterBar/WaterBar';
import WaterBottle from './WaterBottle/WaterBottle';

import './WaterInfo.css';

export default class WaterInfo extends React.Component{

	render() {
		
		return (
			<div className="Water-Info">
				<WaterBar />
				<WaterBottle />
			</div>
		);
	}
};
