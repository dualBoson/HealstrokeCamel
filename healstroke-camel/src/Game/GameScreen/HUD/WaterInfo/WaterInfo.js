import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import WaterBar from './WaterBar/WaterBar';
import WaterBottle from './WaterBottle/WaterBottle';

import css from './WaterInfo.module.css';

export default class WaterInfo extends React.Component {

	render() {
		const waterBottles = Array.from(
			{ length: 3 },
			(_) => <WaterBottle />
		);
		
		return (
			<div className={css.WaterInfo}>
				<div className={css.WaterSymbol}>
					<GameSymbol
						image={ this.props.waterImage }
					/>
				</div>
				<div className={css.WaterResources}>
					<div className={css.barWrapper}> <WaterBar waterPercentage="20%"/> </div>
					<div className={css.WaterBottles}> { waterBottles } </div>
				</div>
			</div>
		);
	}
};
