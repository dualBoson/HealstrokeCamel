import React	from 'react';

import Item from './Item/Item';

import css from './Inventory.module.css';

export default class Inventory extends React.Component {

	render() {
		

		const componentGrid = [
			<Item count={3} />, <Item count={3} />, <Item count={3} />, <Item count={3} />,
			<Item count={3} />, <Item count={3} />, <Item count={3} />
		]
		
		return (
			<div className={css.Inventory}>
				{ componentGrid }
			</div>
		);
	}
};
