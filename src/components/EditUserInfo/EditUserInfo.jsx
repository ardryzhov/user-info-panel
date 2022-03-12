import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './EditUserInfo.module.scss';

import EditInput from '../EditInput';

const EditUserInfo = () => {

	const store = useSelector(state => state.users);
	const selected = store.filter(item => item.isSelected);
	const [isDisable, setIsDisable] = useState(true)
	
	const inputs = [];

	if (selected.length !== 0) {
		for (let prop in selected[0]) {
			inputs.push({[`${prop}`]: selected[0][prop]})
		}
	}

	const [editedUser, setEditedUser] = useState([...inputs]);

	// TODO: При изменении в полу input в EditInput вностить изменения в editedUser


	return (
		<div className={style['edit__user_info']}>
			<div className={style['edit__user_header']}>
				<div className={style['edit__user_title']}>
					<h3>Профиль пользователя</h3>	
				</div>

				<div className={style['edit__user_btn']}>
					<button onClick={() => setIsDisable(prev => !prev)}>Редактировать</button>	
				</div>
			</div>

			<div className={style['edit__user_inputs']}>
				{
					inputs.map(val => {
						const prop = Object.keys(val)
						const value = Object.values(val)
						return <EditInput 
						key={value} 
						isDisable={isDisable}
						prop={prop} 
						value={value} 
						setEditedUser={setEditedUser}/>
					})
				}	
			</div>	
		</div>
	)
};

export default EditUserInfo;