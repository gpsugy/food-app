import { CSSTransitionGroup } from 'react-transition-group';
import React, { Component } from 'react';

import spinner from '../styles/icons/spinner.gif';

export default class AsyncButton extends Component {
	constructor(props) {
		super(props);

		this.renderButton = this.renderButton.bind(this);
	}

	renderButton(handleClick, fetching, fetched, btnText) {
		if (!fetching && !fetched) {
			return(<button className="async-btn" key="async-btn" type="button" onClick={handleClick}>{btnText}</button>);
		}
		else {
			return(
				<div className="spinner-container">
					<img src={spinner} alt="Loading..." className="spinner"/>
				</div>
			);
		}
	}

	render() {
		const { fetched, fetching, handleClick, btnText } = this.props;
		return (
			<CSSTransitionGroup
			component="div"
			className="fade-container"
			transitionName="fade"
			transitionEnterTimeout={500}
			transitionLeaveTimeout={300}>
				{this.renderButton(handleClick, fetching, fetched, btnText)}
			</CSSTransitionGroup>
		)
	}
}
