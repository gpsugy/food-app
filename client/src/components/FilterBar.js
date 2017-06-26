import React, { Component } from 'react';

export default class FilterBar extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const {  } = this.props;
		return (
			<div>
				<ul className="filter-list">
					<li><span>Rating ^</span></li>
					<li><span>Price ^</span></li>
					<li><span>Distance ^</span></li>
				</ul>
			</div>
		)
	}
}
