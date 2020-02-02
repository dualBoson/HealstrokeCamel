import React	from 'react';

import AmbientInfoStructure from '../AmbientInfoStructure/AmbientInfoStructure';
import WindSymbol from './WindSymbol/WindSymbol';
import WindBar from './WindBar/WindBar';

import css from './WindInfo.module.css';

export default class WindInfo extends React.Component {

	render() {
		
		return (
			<AmbientInfoStructure
				ambientSymbol={ <WindSymbol /> }
				ambientBar={ <WindBar /> }
			/>
		);
	}
};

