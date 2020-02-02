import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import './WindSymbol.css';

export default class WindSymbol extends React.Component{

	render() {
		
		return (
			<div className="Wind-Symbol">
				<GameSymbol
					image="Wind Image"
				/>
			</div>
		);
	}
};
