import React, { useState, useEffect } from 'react';
import style from './SortBtnPanel.module.scss';

import SortBtn from '../SortBtn/';

import { v4 as uuidv4 } from 'uuid';

const SortBtnPanel = () => {

	const [sortParams] = useState([
		{id: uuidv4(), title: 'по имени', ticket: 'name'},
		{id: uuidv4(), title: 'по городу', ticket: 'city'},
	])

	return (
		<div className={style['sort__btn_wrap']}>
			<div className={style['sort__btn_content']}>
				<div className={style['sort__btn_title']}>
					<h2>Сортировка</h2>
				</div>

				<div className={style['sort__btns']}>
					{sortParams.map(param => {
						return (
							<SortBtn key={param.id} title={param.title} ticket={param.ticket} />
						)
					})}	
				</div>
			</div>
		</div>
	)
};

export default SortBtnPanel;