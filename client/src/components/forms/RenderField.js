import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div className="form-group">
		<label>
			{label}
		</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{ touched && ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))}
		</div>
	</div>
)

export default renderField;