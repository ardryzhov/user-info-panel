import { FETCH_USERS, SELECT_USER } from './actions';

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

		default:
			return state;
	}
};

const state = [
	{id: 1, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", city: "Lebsackbury", street: "Kattie Turnpike", companyName: "Hoeger LLC", zipcode: "31428-2261", phone: "024-648-3804", website: "ambrose.net", isSelected: false},
	{id: 2, name: "Clementina2 DuBuque2", username: "Moriah.Stanton2", email: "Rey.Padberg@karina.biz2", city: "Lebsackbury2", street: "Kattie Turnpike2", companyName: "Hoeger LLC2", zipcode: "22222-2222", phone: "222-222-2222", website: "ambrose.net2", isSelected: false},
]

