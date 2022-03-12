import React from 'react'
import style from './SortBtn.module.scss';

const SortBtn = ({id, title, sortParams,  setSortParams}) => {

	const changeParams = (id) => {
		const filtred = sortParams.filter(param => {
			param.select = false;
			if (param.id === id) param.select = true;
			return param;
		})
		setSortParams([...filtred])
	}

	return (
		<div className={style['sort__btn_wrap']}>
			<button className={style['sort__btn']} onClick={(e) => changeParams(id)}>{title}</button>
		</div>
	)
};

export default SortBtn;