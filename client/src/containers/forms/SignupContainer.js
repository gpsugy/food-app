import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	// return {
	// 	sorting: state.businesses.sorting
	// };
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: () => {
			console.log('clicked submit');
		}
	};
}

const SignupContainer = connect(
	// mapStateToProps,
	// mapDispatchToProps
)(Signup)

export default SignupContainer