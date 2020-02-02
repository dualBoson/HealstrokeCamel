import React	from 'react';

import Player from './Player/Player';
import Desert from './Desert/Desert';

import css from './World.module.css';

export default class World extends React.Component {

	render() {
		
		return (
			<div className={css.World}>
				<Player />
				<Desert />
			</div>
		);
	}
};
