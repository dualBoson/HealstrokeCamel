import React	from 'react';

import WaterBar from './WaterBar/WaterBar';
import WaterBottle from './WaterBottle/WaterBottle';

import css from './WaterInfo.module.css';

export default class WaterInfo extends React.Component {

	render() {
		
		return (
			<div className={css.WaterInfo}>
				<WaterBar />
				<WaterBottle />
			</div>
		);
	}
};
