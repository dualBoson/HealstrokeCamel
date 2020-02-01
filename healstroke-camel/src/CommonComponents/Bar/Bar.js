import React	from 'react';

import './Bar.css';

export default class Bar extends React.Component{

	render() {
		
		return (
			<div>
				Bar
				{ this.props.orientation }
				{ this.props.color }
				{ this.props.percentage }
			</div>
		);
	}
};
