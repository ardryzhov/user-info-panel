import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './EditUserInfo.module.scss';

import { v4 as uuidv4 } from 'uuid';

import EditInput from '../EditInput';
import { saveChangeAction } from '../../redux/actions';

const EditUserInfo = () => {

	const store = useSelector(state => state.users);
	const selected = store.filter(item => item.isSelected);
	const [isDisable, setIsDisable] = useState(true);
	const [hasInvalid, setHasInvalid] = useState(false)
	const dispatch = useDispatch()
	
	let inputs = [];
	let keys = [];

	if (selected.length !== 0) {
		for (let prop in selected[0]) {
			inputs.push({[`${prop}`]: selected[0][prop]})
		}
	}

	inputs.map(val => {
		const key = Object.keys(val)[0];
		if (key !== 'id' && key !== 'isSelected') {
			keys.push(key)
		}
	})

	const checkInvalidClass = (arr) => {
		if (arr.length > 0 ) {
			setHasInvalid(true)
		} else {
			setHasInvalid(false)
		}
	}

	const disableInput = () => {
		if (isDisable) setIsDisable(false)
	}

	const saveChange = () => {
		if (!hasInvalid) {
			dispatch(saveChangeAction())
			console.log('JSON', JSON.stringify(selected, null, 2))
		} else {
			return 
		}
	}

	return (
		<div className={style['edit__user_info']}>
			<div className={style['edit__user_header']}>
				<div className={style['edit__user_title']}>
					<h3>Профиль пользователя</h3>	
				</div>

				<div className={style['edit__user_btn']}>
					<button onClick={disableInput}>Редактировать</button>	
				</div>
			</div>

			<div className={style['edit__user_inputs']}>
					{
						keys.map(val => {
							return (
								<EditInput
								key={uuidv4()}
								isDisable={isDisable}
								title={val}
								checkInvalidClass={checkInvalidClass}/>
							)
						})
					}
			</div>

			<div className={style['edit__user_btn-update']}>
				<button disabled={isDisable} onClick={saveChange} >Сохранить</button>
			</div>	
		</div>
	)
};

export default EditUserInfo;