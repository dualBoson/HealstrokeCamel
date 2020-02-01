import React from 'react';

import Header from './Header/Header'

import './Game.css';

export default function Game() {
	return (
		<div className="Game">

			<Header />

			<div class="Game-Screen">
				<div class ="HUD">
					<div class="Close-Button">
					</div>
					<div class="Water-Info">
						<div class="Water-Bar">
						</div>
						<div class="Water-Bottles">
						</div>
					</div>
					<div class="Organ-Info">
						<div class="Kidney-Info">
							<div class="Kidney-Bar">
							</div>
							<div class="Spare-Kidneys">
							</div>
						</div>
						<div class="Heart-Info">
							<div class="Heart-Bar">
							</div>
							<div class="Spare-Hearts">
							</div>
						</div>
						<div class="Brain-Info">
							<div class="Brain-Bar">
							</div>
						</div>
					</div>
					<div class="Map">
					</div>
					<div class="Conditions-Info">
					</div>
				</div>

				<div class="World">
					<div class="Player">
					</div>
					<div class="Desert">
					</div>
				</div>
			</div>

		</div>
	);
}
