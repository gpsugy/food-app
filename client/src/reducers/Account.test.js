// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'

// import { SIGNUP_SEND_REQUEST, SIGNUP_SUCCESS, requestSignup } from '../actions/Account';

// const middlewares = [ thunk ];
// const mockStore = configureMockStore(middlewares);

// const mockResponse = (status, statusText, response) => {
//   return new window.Response(response, {
//     status: status,
//     statusText: statusText,
//     headers: {
//       'Content-type': 'application/json'
//     }
//   });
// };

// describe('(Reducer) Account Signup', () => {
// 	it('receive user json ', () => {
// 		window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(400, 'Test' +
//       ' Error', '{"status":400, "statusText": Test Error!}')));

// 		let user = {
// 			email: 'test@gmail.com',
// 			password: 'pass'
// 		};
// 		let store = mockStore({});
// 	    return store.dispatch(requestSignup(user))
// 	      .then(() => {
// 	        const expectedActions = store.getActions();
// 	        expect(expectedActions.length).toBe(2);
// 	        expect(expectedActions).toContainEqual({type: SIGNUP_SEND_REQUEST});
// 	        expect(expectedActions).toContainEqual({type: SIGNUP_SUCCESS,
// 	          error: {status: 400, statusText: 'Test Error'}});
// 	      })
// 		});
// });
