import React from 'react';
import style from './skills.module.css'
import reusable from "common/styles/reusable.module.css"
import {skills} from "app/data";

export const Skills = () => {
	return (
		<section className={`${style.skills} ${reusable.section}`} id="skills">
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Professional Skills</h2>
			<p className={reusable.sectionSubtitle}>
				My <span>Stack</span>
			</p>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				{skills.map(({name, percentage, description}, index) => {
					return (
						<div key={index} className={style.item}>
							<div className={style.titles}>
								<h3 className={style.name}>{name}</h3>
								<span className={style.number}>
									{percentage} <span>%</span>
								</span>
							</div>

							<p className={style.description}>{description}</p>

							<div className={style.bar}>
								<span className={style.percentage} style={{width: `${percentage}%`}}>
									<span></span>
								</span>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	);
}