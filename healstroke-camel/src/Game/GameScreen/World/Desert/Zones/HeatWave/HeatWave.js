import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';
import HeatWaveTexture from '@Img/HeatWaveTexture.png';

import css from './HeatWave.module.css';

export default class HeatWave extends React.Component {

	render() {
		
		return (
			<div className={css.HeatWave}>
				<ZoneStructure
					texture={ <img src={HeatWaveTexture} alt="HeatWaveTexture" /> }
				/>
			</div>
		);
	}
};
