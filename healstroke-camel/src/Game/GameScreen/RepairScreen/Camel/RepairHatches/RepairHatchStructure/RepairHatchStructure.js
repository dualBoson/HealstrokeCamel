import React	from 'react';

import './RepairHatchStructure.css';

export default class RepairHatchStructure extends React.Component{

	render() {
		const hatchCenter = this.props.open ? "Open-Hatch" : "Closed-Hatch";
		
		return (
			<div class="Repair-Hatch-Structure">
				<div class="Repair-Hatch-Rim">
					<div class={ "Hatch-Center " + hatchCenter }>
						{ this.props.organHatchImage }
					</div>
				</div>
				<div class="Repair-Hatch-Screw">
				</div>
			</div>
		);
	}
};
