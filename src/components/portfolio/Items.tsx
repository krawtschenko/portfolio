import React from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'
import {FaArrowRight} from 'react-icons/fa'
import shapeTwo from 'assets/shape-2.png'

interface Props {
	projectItems: {
		id: number
		img: string
		category: string
		title: string
		description: string
	}[]
}

export const Items = ({projectItems}: Props) => {
	return (
		<>
			{projectItems.map(projectItem => {
				const {id, img, category, title, description} = projectItem

				return (
					<div className={`${style.items} ${reusable.card} ${reusable.cardTwo}`} key={id}>
						<div className={style.imgWrapper}>
							<img src={img} alt="img"/>
						</div>

						<span className={`${style.category} ${reusable.text_cs}`}>{category}</span>
						<h3 className={style.title}>{title}</h3>
						<p className={style.description}>{description}</p>

						<a href={"#"} className={reusable.link}>
							See project
							<FaArrowRight className={reusable.linkIcon}></FaArrowRight>

							<img src={shapeTwo} alt="shapeTwo" className={`${reusable.shape} ${reusable.c_shape}`}/>
						</a>
					</div>
				)
			})}
		</>
	)
}