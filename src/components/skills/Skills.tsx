import React from 'react';
import style from './skills.module.css'
import reusable from "common/styles/reusable.module.css"
import {skills} from "app/data";

export const Skills = () => {
	return (
		<section className={`${style.skills} ${reusable.section}`} id="skills">
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Professional Skills</h2>
			<p className={reusable.sectionSubtitle}>
				My <span>Technologies and Tools</span>
			</p>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				{skills.map(({id, name, link, logo}) => {
					return (
						<a href={link} target="_blank" key={id} className={style.item}>
							<div className={style.logo}>
								<img src={logo} alt="logo"/>
								<h3 className={style.name}>{name}</h3>
							</div>
						</a>
					)
				})}
			</div>
		</section>
	);
}