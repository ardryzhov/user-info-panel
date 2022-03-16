import { FETCH_USERS, SELECT_USER, CHANGE_INPUT, SAVE_CHANGE, SORT_NAME, SORT_COMPANY, SORT_BY } from './actions';

const initialState = [];

export const userReducer = (state = initialState, action) => {

	switch (action.type) {
		case FETCH_USERS:
			const newState = action.payload.map(item => {
				item.street = item.address.street;
				item.city = item.address.city;
				item.zipcode = item.address.zipcode;
				item.companyName = item.company.name;
				item.isSelected = false
				item.comment = '';

				delete item.address;
				delete item.company;
				return item
			})
			return [...newState];

		case SELECT_USER:
			const selectedUser = state.filter(item => {
				item.isSelected = false;
				if (item.id === action.payload) {
					item.isSelected = true;
				}
				return item;
			})
			return [...selectedUser]

		case CHANGE_INPUT:
			const nwState = state.map(item => {
				if (item.id === action.payload.id) {
					return action.payload
				} 
				return item
			})
			return [...nwState]
		
		case SAVE_CHANGE: 
			const savedChangeState = state.filter(item => {
				item.isSelected = false
				return item
			});
			return [...savedChangeState]

		case SORT_BY:
			function sortByTicket(ticket) {
				return (a, b) => a[ticket] > b[ticket] ? 1 : -1
			}
			const sortState = state.sort(sortByTicket(action.payload))

			return [...sortState]

		default:
			return state;
	}
};

