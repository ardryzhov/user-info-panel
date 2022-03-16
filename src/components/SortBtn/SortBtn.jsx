import React from 'react'
import { useDispatch } from 'react-redux';
import style from './SortBtn.module.scss';

import { sortByAction } from '../../redux/actions'

const SortBtn = ({title, ticket}) => {

	const dispatch = useDispatch();

	const sortUsers = () => {
		dispatch(sortByAction(ticket))
	}

	return (
		<div className={style['sort__btn_wrap']}>
			<button className={style['sort__btn']} onClick={sortUsers}>{title}</button>
		</div>
	)
};

export default SortBtn;