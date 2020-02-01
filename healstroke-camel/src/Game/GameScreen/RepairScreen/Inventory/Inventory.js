import React	from 'react';

import Item from './Item/Item';

import './Inventory.css';

export default class Inventory extends React.Component{

	render() {
		

		const componentGrid = [
			<Item count={3} />, <Item count={3} />, <Item count={3} />, <Item count={3} />,
			<Item count={3} />, <Item count={3} />, <Item count={3} />
		]
		
		return (
			<div class="Inventory">
				{ componentGrid }
			</div>
		);
	}
};
