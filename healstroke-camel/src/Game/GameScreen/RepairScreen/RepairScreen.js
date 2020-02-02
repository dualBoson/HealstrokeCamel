import React	from 'react';

import Camel from './Camel/Camel';
import Inventory from './Inventory/Inventory';

import './RepairScreen.css';

export default class RepairScreen extends React.Component{

	render() {
		
		return (
			<div className="Repair-Screen">
				<Camel />
				<Inventory />
			</div>
		);
	}
};
