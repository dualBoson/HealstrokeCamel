import React	from 'react';

import Camel from './Camel/Camel';
import Inventory from './Inventory/Inventory';

import css from './RepairScreen.module.css';

export default class RepairScreen extends React.Component {

	render() {
		
		return (
			<div className={css.RepairScreen}>
				<Camel />
				<Inventory />
			</div>
		);
	}
};
