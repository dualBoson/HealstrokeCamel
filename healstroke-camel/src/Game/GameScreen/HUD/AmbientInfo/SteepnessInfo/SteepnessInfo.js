import React	from 'react';

import AmbientInfoStructure from '../AmbientInfoStructure/AmbientInfoStructure';
import SteepnessSymbol from './SteepnessSymbol/SteepnessSymbol';
import SteepnessBar from './SteepnessBar/SteepnessBar';

import css from './SteepnessInfo.module.css';

export default class SteepnessInfo extends React.Component {

	render() {
		
		return (
			<AmbientInfoStructure
				ambientSymbol={ <SteepnessSymbol /> }
				ambientBar={ <SteepnessBar /> }
			/>
		);
	}
};

