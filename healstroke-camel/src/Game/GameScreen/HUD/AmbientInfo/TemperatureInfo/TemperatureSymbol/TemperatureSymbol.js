import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './TemperatureSymbol.module.css';

export default class TemperatureSymbol extends React.Component {

	render() {
		
		return (
			<div className={css.TemperatureSymbol}>
				<GameSymbol
					image="Temperature Image"
				/>
			</div>
		);
	}
};
