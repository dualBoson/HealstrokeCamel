import React	from 'react';

import './Item.css';

export default class Item extends React.Component{

	render() {
		
		return (
			<div className="Item">
				{ this.props.count } x Item
			</div>
		);
	}
};
