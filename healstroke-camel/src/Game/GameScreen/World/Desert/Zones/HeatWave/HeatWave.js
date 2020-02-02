import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import css from './HeatWave.module.css';

export default class HeatWave extends React.Component {

	render() {
		
		return (
			<div className={css.HeatWave}>
				<ZoneStructure
					texture="HeatWave Texture"
				/>
			</div>
		);
	}
};
