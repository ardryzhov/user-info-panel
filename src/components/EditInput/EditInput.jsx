import React, { useState } from 'react'
import style from './EditInput.module.scss';

import { changeInputAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const EditInput = ({isDisable, title, checkInvalidClass}) => {

	const store = useSelector(state => state.users);
	const dispatch = useDispatch();
	const selectUser = store.filter(item => item.isSelected)[0];

	const inputTitle = `${title.slice(0, 1).toUpperCase()}${title.slice(1, title.length)}`;
	
	let key = '';
	let inputValue = [];
	const classes = [];

	const regName = /^[A-aZ-zА-аЯ-я]+/
	const moreOneReg = /^\D+$|(^\D+\s\D+$)/;
	const emailReg = /[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}/;
	const websiteReg = /^[a-z]+\.[a-z]/;
	const zipReg = /^\d+$|^\d+\-\d+$/;
	const companyReg = /^\D+$/;
	const phoneReg = /^[0-9+ ()x.-]+$/

	for (let prop in selectUser) {
		inputValue.push({[`${prop}`]: selectUser[prop]})
	}

	inputValue.forEach(i => {
		const j = Object.keys(i)[0];
		const value = Object.values(i)[0]
		if (j === title) {
			key = value
		}
	})

	const [val, setVal] = useState(key)

	const blurInput = () => {
		inputValue.filter(i => {
			let key = Object.keys(i)[0];
			if (key === title) {
				i[`${key}`] = val.trim()
			}
		});
		const newState = [];
		let j = 0;
		while (j < inputValue.length) {
			Object.assign(newState, inputValue[j]);
			j++;
		};
		dispatch(changeInputAction({...newState}));
		checkInvalidClass(classes)
	} 

	if (isDisable) {
		classes.push('inactive__input')
	}

	switch (title) {
		case 'name':
		case 'street':
			if (!moreOneReg.test(val)) {
				classes.push('invalid-input');
			}
			break;
		
		case 'username':
		case 'city':
			if (!regName.test(val)) {
				classes.push('invalid-input')
			}
			break

		case 'email':
			if (!emailReg.test(val)) {
				classes.push('invalid-input')
			}
			break

		case 'website':
			if (!websiteReg.test(val)) {
				classes.push('invalid-input')
			}		
			break

		case 'zipcode':
			if (!zipReg.test(val)) {
				classes.push('invalid-input')
			}
			break

		case 'companyName':
			if (!companyReg.test(val)) {
				classes.push('invalid-input')
			}
			break
		
		case 'phone':
			if (!phoneReg.test(val)) {
				classes.push('invalid-input')
			}
			break
	}

	return (
		<div className={style['user__input']}>
			<label htmlFor="">{inputTitle}: </label>
			{
				title === 'comment' 
				? <textarea rows='5' disabled={isDisable}></textarea> 
				: <input type="text" 
				onBlur={blurInput} 
				className={style[`${classes.join(' ')}`]}
				value={val} 
				onChange={(e) => setVal(e.target.value)} disabled={isDisable}/>
			}
		</div>
	)
};

export default EditInput;