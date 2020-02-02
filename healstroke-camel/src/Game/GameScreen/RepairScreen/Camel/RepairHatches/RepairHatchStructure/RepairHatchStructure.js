import React	from 'react';

import css from './RepairHatchStructure.module.css';

export default class RepairHatchStructure extends React.Component {

	render() {
		const hatchCenter = this.props.open ? "OpenHatch" : "ClosedHatch";
		
		return (
			<div className={css.RepairHatchStructure}>
				<div className={css.RepairHatchRim}>
					<div className={ "HatchCenter " + hatchCenter }>
						{ this.props.organHatchImage }
					</div>
				</div>
				<div className={css.RepairHatchScrew}>
				</div>
			</div>
		);
	}
};
