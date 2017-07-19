import { connect } from 'react-redux';

import { logout } from '../actions/Account';
import { redirect } from '../actions/Redirect';
import Navbar from '../components/Navbar';

const mapStateToProps = (state, ownProps) => {
	console.log(state.user.account.email);
	console.log(state.redirect);
	return {
		email: state.user.account.email,
		redirect: state.redirect
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogout: () => {
			dispatch(logout());
			dispatch(redirect('/'));
		}
	};
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer