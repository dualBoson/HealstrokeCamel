import React	from 'react';

import HUD from './HUD/HUD';
import RepairScreen from './RepairScreen/RepairScreen';
import World from './World/World';

import './GameScreen.css';

export default class GameScreen extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			inventoryOpen: false,
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', (event) => this.handleKeyDown(event));
	}

	handleKeyDown(event) {
		event.preventDefault();

		switch(event.keyCode) {
			case 37:
			case 65:
				console.log("Left");
				break;
			case 39:
			case 68:
				console.log("Right");
				break;
			case 38:
			case 87:
				console.log("Top");
				break;
			case 40:
			case 83:
				console.log("Bottom");
				break;
			default:
				console.log(event.keyCode);
		}
	}

	render() {
		
		return (
			<div className="Game-Screen">
				<HUD />
				<World />
				<RepairScreen />
			</div>
		);
	}
};
