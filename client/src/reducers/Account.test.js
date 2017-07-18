import { account } from './';
import { logout } from '../actions/Account';

describe('(Reducer) Account', () => {
	it('nullify email on LOGOUT', () => {
		let state = {
		    email: 'test@gmail.com'
		};
		expect(
			account(state, logout())
		).toEqual(
			{ email: null }
		);
	})
});