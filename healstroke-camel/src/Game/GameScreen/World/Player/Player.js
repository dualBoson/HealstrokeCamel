import React	from 'react';

import Camel from '@Img/CamelPlaceholder.png';

import css from './Player.module.css';

export default class Player extends React.Component {

	render() {
		
		return (
			<div className={css.Player}>
				<img src={Camel} alt="Camel" />
			</div>
		);
	}
};
