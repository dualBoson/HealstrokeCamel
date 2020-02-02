import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import css from './OrganSymbol.module.css';

export default class OrganSymbol extends React.Component {

	render() {
		return (
			<div className={ css.OrganSymbol }>
				<GameSymbol
					image={ this.props.organImage }
				/>
			</div>
		);
	}
};
