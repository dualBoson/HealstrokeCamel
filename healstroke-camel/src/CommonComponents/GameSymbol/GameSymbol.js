import React	from 'react';

import css from './GameSymbol.module.css';

export default class GameSymbol extends React.Component {

	render() {
		
		return (
			<div className={css.GameSymbolBox}>
				{ this.props.image }
			</div>
		);
	}
};
