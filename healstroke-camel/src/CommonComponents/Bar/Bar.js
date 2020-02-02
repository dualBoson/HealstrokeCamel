import React	from 'react';

import css from './Bar.module.css';

export default class Bar extends React.Component {

	render() {
		let barContourCss = css.BarContour + ' ';
		let barStyle = {
			//backgroundColor: this.props.color
		};
		const percentage = "30%"//this.props.percentage;
		switch(this.props.orientation) {
			case 'horizontal':
				barContourCss += css.horizontal;
				barStyle.width = percentage;
				break;
			case 'vertical':
				barContourCss += css.vertical;
				barStyle.height = percentage;
				break;
		}
				barStyle.backgroundColor = "red";

		
		return (
			<div className={barContourCss}>
  				<div style={barStyle} className={css.Bar}></div>
			</div>
		);
	}
};
