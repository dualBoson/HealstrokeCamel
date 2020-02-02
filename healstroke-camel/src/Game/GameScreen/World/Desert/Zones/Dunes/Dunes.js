import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import css from './Dunes.module.css';

export default class Dunes extends React.Component {

	render() {
		
		return (
			<div className={css.Dunes}>
				<ZoneStructure
					texture="Dunes Texture"
				/>
			</div>
		);
	}
};
