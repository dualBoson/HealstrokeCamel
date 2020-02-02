import React from 'react';

import Header from './Header/Header';
import GameScreen from './GameScreen/GameScreen';

import './Game.css';

export default function Game() {
	return (
		<div className="Game">

			<Header />

			<GameScreen />

		</div>
	);
}
