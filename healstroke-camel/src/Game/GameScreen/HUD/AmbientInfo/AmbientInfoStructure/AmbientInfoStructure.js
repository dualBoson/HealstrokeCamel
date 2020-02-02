import React	from 'react';

import css from './AmbientInfoStructure.module.css';

export default class AmbientInfoStructure extends React.Component {

	render() {
		return (
			<div className={css.AmbientInfoStructure} style={{ "grid-area": this.props.gridArea }}>
				<div className={css.symbolWrapper}> { this.props.ambientSymbol } </div>
				<div className={css.barWrapper}> { this.props.ambientBar } </div>
			</div>
		);
	}
};
