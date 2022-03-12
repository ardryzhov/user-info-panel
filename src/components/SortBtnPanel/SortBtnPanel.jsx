import React, { useState, useEffect } from 'react';
import style from './SortBtnPanel.module.scss';
import { useSelector } from 'react-redux';

import SortBtn from '../SortBtn/';

import { v4 as uuidv4 } from 'uuid';

const SortBtnPanel = () => {

	const store = useSelector(state => state.users);
	const [sortParams, setSortParams] = useState([
		{id: uuidv4(), title: 'по городу', select: false},
		{id: uuidv4(), title: 'по компании', select: false},
	])

	// useEffect(() => {
	// 	console.log('after fetch: ', store)
	// }, [sortParams])

	return (
		<div className={style['sort__btn_wrap']}>
			<div className={style['sort__btn_content']}>
				<div className={style['sort__btn_title']}>
					<h2>Сортировка</h2>
				</div>

				<div className={style['sort__btns']}>
					{sortParams.map(param => {
						return (
							<SortBtn key={param.id} id={param.id} title={param.title} sortParams={sortParams} setSortParams={setSortParams} />
						)
					})}	
				</div>
			</div>
		</div>
	)
};

export default SortBtnPanel;