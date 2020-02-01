import React	from 'react';

import './GameSymbol.css';

export default class GameSymbol extends React.Component{

	render() {
		
		return (
			<div>
				GameSymbol
				{ this.props.image }
			</div>
		);
	}
};
