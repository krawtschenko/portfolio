import React from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'

interface Props {
	list: string[]
}

export const List = ({list}: Props) => {
	return (
		<div className={style.list}>{list.map((category, index) => {
			return (
				<button key={index} className={`${style.listItem} ${reusable.text_cs}`}>{category}</button>
			)
		})}</div>
	);
};