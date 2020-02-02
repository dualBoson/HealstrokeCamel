import React	from 'react';

import HeartHatch from './RepairHatches/HeartHatch/HeartHatch';
import KidneyHatch from './RepairHatches/KidneyHatch/KidneyHatch';

import css from './Camel.module.css';

export default class Camel extends React.Component {

	render() {
		
		return (
			<div className={css.Camel}>
				Camel Image
				<div className={css.CamelLeftHatch}>
					<KidneyHatch />
				</div>
				<div className={css.CamelRightHatch}>
					<HeartHatch />
				</div>
			</div>
		);
	}
};
