import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import './TemperatureSymbol.css';

export default class TemperatureSymbol extends React.Component{

	render() {
		
		return (
			<div className="Temperature-Symbol">
				<GameSymbol
					image="Temperature Image"
				/>
			</div>
		);
	}
};
