import React	from 'react';

import './AmbientInfoStructure.css';

export default class AmbientInfoStructure extends React.Component{

	render() {
		return (
			<div class="Ambient-Info-Structure">
				{this.props.ambientSymbol}
				{this.props.ambientBar}
			</div>
		);
	}
};
