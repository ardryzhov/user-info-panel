import React from 'react'
import style from './UserInfoPanel.module.scss';
import { useSelector } from 'react-redux';

import UserInfoItem from '../UserInfoItem';

import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const UserInfoPanel = () => {

	const store = useSelector(state => state.users)

	const loader = css`
		display: block;
		margin: 0 auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 5px solid #4B51EF;
		border-radius: 40px;
		box-shadow: 2px 5px 10px #4348d6;
	`

	return (
		<div className={style['user__info_panel']}>
			{
				store.length === 0 ?
				<HashLoader size={120} color={'#4B51EF'} css={loader} className={style['spinner-loader']} /> 
				:<>
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
				</>
			}
		</div>
	)
};

export default UserInfoPanel;