import React	from 'react';

import KidneyInfo from './KidneyInfo/KidneyInfo';
import HeartInfo from './HeartInfo/HeartInfo';
import BrainInfo from './BrainInfo/BrainInfo';

import css from './OrganInfo.module.css';

export default class OrganInfo extends React.Component {

	render() {
		
		return (
			<div className={css.OrganInfo}>
				<KidneyInfo kidneyPercentage="40%"/>
				<HeartInfo  heartPercentage="50%"/>
				<BrainInfo  brainPercentage="60%"/>
			</div>
		);
	}
};
