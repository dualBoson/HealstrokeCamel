import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';
import DefaultZoneTexture from '@Img/DefaultZoneTexture.png';

import css from './DefaultZone.module.css';

export default class DefaultZone extends React.Component {

	render() {
		
		return (
			<div className={css.DefaultZone}>
				<ZoneStructure
					texture={ <img src={DefaultZoneTexture} alt="DefaultZoneTexture" /> }
				/>
			</div>
		);
	}
};
