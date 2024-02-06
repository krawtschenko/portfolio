import React, {useState} from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'
import {List} from "./List";
import {Items} from "./Items";
import {projects} from "app/data";

export const Portfolio = () => {
	const allNavList = ['all', ...new Set(projects.map(projects => projects.category))]
	const [projectItems, setMenuItems] = useState(projects)
	const [navList, setCategories] = useState(allNavList)

	return (
		<section className={`${style.portfolio} ${reusable.section}`} id='work'>
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Portfolio</h2>
			<p className={reusable.sectionSubtitle}>
				My <span>Cases</span>
			</p>

			<List list={navList}/>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				<Items projectItems={projectItems}/>
			</div>
		</section>
	);
};