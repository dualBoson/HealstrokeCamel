import React	from 'react';

import './OrganInfoStructure.css';

export default class OrganInfoStructure extends React.Component{

	render() {
		const spareOrgans = Array.from(
			{ length: this.props.spareOrgans.count },
			(_) => React.cloneElement( this.props.spareOrgans.type/*, props)*/ )
		);
		return (
			<div>
				{<ul>
					{
						spareOrgans.map(i => {
							return <li>{i}</li>;
						})
					}
				</ul>}
				{this.props.organBar}
			</div>
		);
	}
};
