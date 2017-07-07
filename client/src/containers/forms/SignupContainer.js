import { connect } from 'react-redux';

import Signup from '../../components/forms/Signup';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		hi: 'hi'
// 	};
// }

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (values) => {
			console.log('ready to dispatch');
			// console.log(values.email);
		}
	};
}

const SignupContainer = connect(
	null,
	mapDispatchToProps
)(Signup)

export default SignupContainer