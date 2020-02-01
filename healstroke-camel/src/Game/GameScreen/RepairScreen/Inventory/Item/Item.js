import React	from 'react';

import './Item.css';

export default class Item extends React.Component{

	render() {
		
		return (
			<div class="Item">
				{ this.props.count } x Item
			</div>
		);
	}
};
