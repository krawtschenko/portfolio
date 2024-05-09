import React from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'
import {FaArrowRight} from 'react-icons/fa'
import shapeTwo from 'assets/shape-2.png'
import {motion} from "framer-motion";

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
					<motion.div
						layout
						animate={{opacity: 1, scale: 1}}
						initial={{opacity: 0.8, scale: 0.6}}
						exit={{opacity: 0.8, scale: 0.6}}
						transition={{duration: 0.3}}
						className={`${style.items} ${reusable.card} ${reusable.cardTwo}`} key={id}>
						<div className={style.imgWrapper}>
							<img src={img} alt="img"/>
						</div>

						<span className={`${style.category} ${reusable.text_cs}`}>{category}</span>
						<h3 className={style.title}>{title}</h3>
						<p className={style.description}>{description}</p>

						<div className={style.linkWrap}>
							<a href={"#"} className={`${reusable.link} ${style.link}`}>
								<span>View Demo</span>
								<FaArrowRight className={reusable.linkIcon}></FaArrowRight>
							</a>
						</div>
						<div className={style.linkWrap}>
							<a href={"#"} className={`${reusable.link} ${style.link}`}>
								<span>View Code</span>
								<FaArrowRight className={reusable.linkIcon}></FaArrowRight>
							</a>
						</div>

						<img src={shapeTwo} alt="shapeTwo" className={`shape ${reusable.c_shape}`}/>
					</motion.div>
				)
			})}
		</>
	)
}