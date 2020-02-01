import React	from 'react';

import HUD from './HUD/HUD';
import RepairScreen from './RepairScreen/RepairScreen';
import World from './World/World';

import './GameScreen.css';

export default class GameScreen extends React.Component{

	render() {
		
		return (
			<div>
				<HUD />
				<RepairScreen />
				<World />
			</div>
		);
	}
};
