import React	from 'react';

import KidneyInfo from './KidneyInfo/KidneyInfo';
import HeartInfo from './HeartInfo/HeartInfo';
import BrainInfo from './BrainInfo/BrainInfo';

import './OrganInfo.css';

export default class OrganInfo extends React.Component{

	render() {
		
		return (
			<div>
				<KidneyInfo />
				<HeartInfo />
				<BrainInfo />
			</div>
		);
	}
};
