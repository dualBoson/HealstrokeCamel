import React from 'react';

import Header from './Header/Header';
import GameScreen from './GameScreen/GameScreen';

import css from './Game.module.css';

export default function Game() {
	return (
		<div className={css.Game}>

			<Header />

			<GameScreen />

		</div>
	);
}
