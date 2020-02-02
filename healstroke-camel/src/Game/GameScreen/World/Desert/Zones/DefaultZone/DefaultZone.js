import React	from 'react';

import ZoneStructure from '../ZoneStructure/ZoneStructure';

import css from './DefaultZone.module.css';

export default class DefaultZone extends React.Component {

	render() {
		
		return (
			<div className={css.DefaultZone}>
				<ZoneStructure
					texture="DefaultZone Texture"
				/>
			</div>
		);
	}
};
