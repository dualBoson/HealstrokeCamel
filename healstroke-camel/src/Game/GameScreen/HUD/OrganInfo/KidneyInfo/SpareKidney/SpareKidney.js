import React	from 'react';

import SpareOrgan from '../../OrganInfoStructure/SpareOrgan/SpareOrgan';

import css from './SpareKidney.module.css';

export default class SpareKidney extends React.Component {

	render() {
		
		return (
			<div className={css.SpareKidney}>
				<SpareOrgan
					image="Spare Kidney Image"
				/>
			</div>
		);
	}
};
