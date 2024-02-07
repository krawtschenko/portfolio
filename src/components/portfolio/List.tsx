import React, {useState} from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'

interface Props {
	list: string[]
	filterItems: (category: string) => void
}

export const List = ({list, filterItems}: Props) => {
	const [active, setActive] = useState(0)

	return (
		<div className={style.list}>{list.map((category, index) => {
			return (
				<button onClick={() => {
					setActive(index)
					filterItems(category)
				}} key={index}
				        className={`${active === index ? style.active : ''}
				        ${style.listItem} ${reusable.text_cs}`}>{category}</button>
			)
		})}</div>
	);
};