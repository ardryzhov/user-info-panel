export const FETCH_USERS = 'FETCH_USERS';
export const SELECT_USER = 'SELECT_USER';

export const fetchUsersAction = (payload) => {
	return {type: FETCH_USERS, payload}
}

export const selectUserAction = (payload) => {
	return {type: SELECT_USER, payload}
}