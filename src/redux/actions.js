export const FETCH_USERS = 'FETCH_USERS';
export const SELECT_USER = 'SELECT_USER';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SAVE_CHANGE = 'SAVE_CHANGE';
export const SORT_BY = 'SORT_BY';


export const fetchUsersAction = (payload) => {
	return {type: FETCH_USERS, payload}
}

export const selectUserAction = (payload) => {
	return {type: SELECT_USER, payload}
}

export const changeInputAction = (payload) => {
	return {type: CHANGE_INPUT, payload}
}

export const saveChangeAction = () => {
	return {type: SAVE_CHANGE};
}

export const sortByAction = (payload) => {
	return {type: SORT_BY, payload}
}
