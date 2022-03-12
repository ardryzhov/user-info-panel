import { fetchUsersAction } from './actions';

export const fetchUsers = () => {
	return function(dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(data => data.json())
			.then(data => dispatch(fetchUsersAction(data)))
	}
}