import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './WaterBottle.module.css';

export default class WaterBottle extends React.Component {

	render() {
		
		return (
			<div className={css.WaterBottle}>
				<GameSymbol
					image="WaterBottle Image"
				/>
			</div>
		);
	}
};
