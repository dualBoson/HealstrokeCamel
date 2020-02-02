import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';
import DuneTexture from '@Img/DuneTexture.png';

import css from './Dunes.module.css';

export default class Dunes extends React.Component {

	render() {
		
		return (
			<div className={css.Dunes}>
				<ZoneStructure
					texture={ <img src={DuneTexture} alt="DuneTexture" /> }
				/>
			</div>
		);
	}
};
