import React	from 'react';

import Player from './Player/Player';
import Desert from './Desert/Desert';

import './World.css';

export default class World extends React.Component{

	render() {
		
		return (
			<div class="World">
				<Player />
				<Desert />
			</div>
		);
	}
};
