import React	from 'react';

import './RepairHatchStructure.css';

export default class RepairHatchStructure extends React.Component{

	render() {
		const hatchCenter = this.props.open ? "Open-Hatch" : "Closed-Hatch";
		
		return (
			<div className="Repair-Hatch-Structure">
				<div className="Repair-Hatch-Rim">
					<div className={ "Hatch-Center " + hatchCenter }>
						{ this.props.organHatchImage }
					</div>
				</div>
				<div className="Repair-Hatch-Screw">
				</div>
			</div>
		);
	}
};
