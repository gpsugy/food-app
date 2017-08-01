import '../../styles/css/forms/RenderField.css';

import React, { Component } from 'react';

export default class renderField extends Component {	
	constructor(props) {
		super(props);

		this.renderInput = this.renderInput.bind(this);
	}

	renderInput(input, placeholder, type, touched, error, warning) {
		if (touched && (error || warning)) {
			return <input {...input} className="invalidInput" placeholder={placeholder} type={type} />;
		}
		else {
			console.log('never runo nce');
			return <input {...input} placeholder={placeholder} type={type} />;	
		}
	}

	render() {
		const { input, label, placeholder, type, meta: { touched, error, warning } } = this.props;
		let errorRender = touched && ((error && <p>{error}</p>) || (warning && <p>{warning}</p>));
		return (
			<div className="form-group">
				<label>
					{label}
				</label>
				<div>
					{this.renderInput(input, placeholder, type, touched, error, warning)}
					{ errorRender }
				</div>
			</div>
		)
	}
}

// fff7f4