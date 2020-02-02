import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './SpareOrgan.module.css';

export default class SpareOrgan extends React.Component {

	render() {
		
		return (
			<div className={css.SpareOrgan}>
				<GameSymbol
					image={ this.props.image }
				/>
			</div>
		);
	}
};
