import React, { useEffect } from 'react'
import style from './UserInfoPanel.module.scss';
import { useSelector } from 'react-redux';

import UserInfoItem from '../UserInfoItem';

const UserInfoPanel = () => {

	const store = useSelector(state => state.users)

	// useEffect(() => {
	// 	console.log(store)
	// }, [store])

	return (
		<div className={style['user__info_panel']}>

			<div className={style['user__info_header']}>
				<div className={style['user__info_title']}>
					<h3>Список пользователей</h3>
				</div>

				<div className={style['user__info_btns']}></div>
			</div>

			<div className={style['user__info_content']}>
				{
					store.length !== 0 ?
					store.map(item => {
						return (
							<UserInfoItem key={item.id} item={item}/>
						)
					})
					: false
				}
			</div>
			
		</div>
	)
};

export default UserInfoPanel;