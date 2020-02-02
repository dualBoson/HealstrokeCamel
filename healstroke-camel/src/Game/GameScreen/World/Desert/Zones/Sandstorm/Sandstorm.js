import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import css from './Sandstorm.module.css';

export default class Sandstorm extends React.Component {

	render() {
		
		return (
			<div className={css.Sandstorm}>
				<ZoneStructure
					texture="Sandstorm Texture"
				/>
			</div>
		);
	}
};
