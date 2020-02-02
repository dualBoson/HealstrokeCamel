import React	from 'react';

import css from './Map.module.css';

export default class Map extends React.Component {

	render() {
		let mapClasses = css.Map;
		if (this.props.maximized) {
			mapClasses += " " + css.max;
		}
		
		return (
			<div className={mapClasses}>
			</div>
		);
	}
};
