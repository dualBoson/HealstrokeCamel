import React	from 'react';

import css from './Item.module.css';

export default class Item extends React.Component {

	render() {
		
		return (
			<div className={css.Item}>
				{ this.props.count } x Item
			</div>
		);
	}
};
