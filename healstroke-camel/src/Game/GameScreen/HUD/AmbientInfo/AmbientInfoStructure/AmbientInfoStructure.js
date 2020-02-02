import React	from 'react';

import css from './AmbientInfoStructure.module.css';

export default class AmbientInfoStructure extends React.Component {

	render() {
		return (
			<div className={css.AmbientInfoStructure}>
				{ this.props.ambientSymbol }
				{ this.props.ambientBar }
			</div>
		);
	}
};
