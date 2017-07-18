import { connect } from 'react-redux';

import { logout } from '../actions/Account';
import Navbar from '../components/Navbar';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		sorting: state.businesses.sorting
// 	};
// }

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogout: () => {
			dispatch(logout());
		}
	};
}

const NavbarContainer = connect(
	null,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer