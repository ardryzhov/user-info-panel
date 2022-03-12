import React from 'react';
import { useDispatch } from 'react-redux';
import style from './UserInfoItem.module.scss';

import { selectUserAction } from '../../redux/actions';

const UserInfoItem = ({item}) => {

	const dispatch = useDispatch();

	const selectUser = () => {
		dispatch(selectUserAction(item.id))
	}

	return (
		<div className={style['user__info_item']}>
			<div className={style['user__info_table']}>
				<div className={style['user__info_table_item']}>
					<div className={style['table__item']}>
						<span className={style['item__title']}>ФИО: </span>
						<span className={style['item__value']}>{item.name}</span>
					</div>
				</div>

				<div className={style['user__info_table_item']}>
					<div className={style['table__item']}>
						<span className={style['item__title']}>Город: </span>
						<span className={style['item__value']}>{item.city}</span>
					</div>
				</div>

				<div className={style['user__info_table_item']}>
					<div className={style['table__item']}>
						<span className={style['item__title']}>Компания: </span>
						<span className={style['item__value']}>{item.companyName}</span>
					</div>
				</div>
			</div>

			<div className={style['user__info_btn']}>
				<button onClick={selectUser}>Подробнее</button>	
			</div>
		</div>
	)
};

export default UserInfoItem;