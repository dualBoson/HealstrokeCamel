import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './WindSymbol.module.css';

export default class WindSymbol extends React.Component {

	render() {
		
		return (
			<div className={css.WindSymbol}>
				<GameSymbol
					image="Wind Image"
				/>
			</div>
		);
	}
};
