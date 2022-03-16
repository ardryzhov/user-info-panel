import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';


import { fetchUsers } from './redux/fetchUsers'

import SortBtnPanel from './components/SortBtnPanel';
import UserInfoPanel from './components/UserInfoPanel';
import EditUserInfo from './components/EditUserInfo';

const App = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state.users);

	const selectedItem = store.filter(value => value.isSelected);


	useEffect(() => {
		// if (store.length === 0) {
		// 	dispatch(fetchUsers())
		// }
		dispatch(fetchUsers())
	}, [])

	return (
		<div className="app">
			<SortBtnPanel className='sort-btn-panel-wrap'/>
			{
				selectedItem.length === 0 
				? <UserInfoPanel className='user-info-panel-wrap'/>
				: <EditUserInfo className='edit-user-info-wrap' />
			}			
		</div>
	)
}

export { App }