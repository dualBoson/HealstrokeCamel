import React	from 'react';

import AmbientInfoStructure from '../AmbientInfoStructure/AmbientInfoStructure';
import TemperatureSymbol from './TemperatureSymbol/TemperatureSymbol';
import TemperatureBar from './TemperatureBar/TemperatureBar';

import './TemperatureInfo.css';

export default class TemperatureInfo extends React.Component{

	render() {
		
		return (
			<AmbientInfoStructure
				ambientSymbol={ <TemperatureSymbol /> }
				ambientBar={ <TemperatureBar /> }
			/>
		);
	}
};

