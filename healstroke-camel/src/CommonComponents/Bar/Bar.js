import React	from 'react';

import css from './Bar.module.css';

export default class Bar extends React.Component {

	render() {
		let barContourCss = css.BarContour + ' ';
		let barStyle = {
			backgroundColor: this.props.color
		};
		switch(this.props.orientation) {
			case 'horizontal':
				barContourCss += css.horizontal;
				barStyle.width = this.props.percentage;
				break;
			case 'vertical':
				barContourCss += css.vertical;
				barStyle.height = this.props.percentage;
				break;
		}

		
		return (
			<div className={barContourCss}>
  				<div style={barStyle} className={css.Bar}></div>
			</div>
		);
	}
};
