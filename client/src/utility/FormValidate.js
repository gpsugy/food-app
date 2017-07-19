export const required = value => value ? undefined : 'Required';
export const minLength = min => value =>
	value && value.length < min ? `Must be at least ${min} characters` : undefined;
export const minLength6 = minLength(6);
export const emailVal = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;