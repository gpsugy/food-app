import { connect } from 'react-redux';

import { logout } from '../actions/Account';
import Navbar from '../components/Navbar';

const mapStateToProps = (state, ownProps) => {
	return {
		email: state.user.account.email
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogout: () => {
			dispatch(logout());
		}
	};
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer