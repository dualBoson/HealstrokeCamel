import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';
import SandstormTexture from '@Img/SandstormTexture.png';

import css from './Sandstorm.module.css';

export default class Sandstorm extends React.Component {

	render() {
		
		return (
			<div className={css.Sandstorm}>
				<ZoneStructure
					texture={ <img src={SandstormTexture} alt="SandstormTexture" /> }
				/>
			</div>
		);
	}
};
