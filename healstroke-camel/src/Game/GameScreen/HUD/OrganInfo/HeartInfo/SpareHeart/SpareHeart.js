import React	from 'react';

import SpareOrgan from '../../OrganInfoStructure/SpareOrgan/SpareOrgan';

import css from './SpareHeart.module.css';

export default class SpareHeart extends React.Component {

	render() {
		
		return (
			<div className={css.SpareHeart}>
				<SpareOrgan
					image="Spare Heart Image"
				/>
			</div>
		);
	}
};
