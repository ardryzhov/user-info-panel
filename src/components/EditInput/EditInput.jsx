import React, { useEffect, useState } from 'react'
import style from './EditInput.module.scss';

const EditInput = ({isDisable, value, prop, setEditedUser}) => {

	const [val, setVal] = useState(value[0]);

	useEffect(() => {
		setEditedUser(prev => [{...prev, title: val}])
	}, [val])

	if (prop[0] === 'id' || prop[0] === 'isSelected') {
		return false;
	}
	

	return (
		<div className={style['user__input']}>
			<label htmlFor="">{prop[0]}: </label>
			<input type="text" value={value[0]} onChange={(e) => setVal(e.target.value)} disabled={isDisable} />
		</div>
	)
};

export default EditInput;