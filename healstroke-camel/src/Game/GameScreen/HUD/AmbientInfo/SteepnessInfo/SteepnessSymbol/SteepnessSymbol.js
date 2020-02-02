import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './SteepnessSymbol.module.css';

export default class SteepnessSymbol extends React.Component {

	render() {
		
		return (
			<div className={css.SteepnessSymbol}>
				<GameSymbol
					image="Steepness Image"
				/>
			</div>
		);
	}
};
