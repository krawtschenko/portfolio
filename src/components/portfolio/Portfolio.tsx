import React, {useState} from 'react';
import style from './portfolio.module.css'
import reusable from 'common/styles/reusable.module.css'
import {List} from "./List";
import {Items} from "./Items";
import {projects} from "app/data";
import {AnimatePresence} from "framer-motion";

export const Portfolio = () => {
	const allNavList = ['all', ...new Set(projects.map(projects => projects.category))]
	const [projectItems, setProjectItems] = useState(projects)
	const [navList, setNavList] = useState(allNavList)

	const filterItems = (category: string) => {
		if (category === 'all') {
			setProjectItems(projects)
		} else {
			const filtered = projects.filter(elem => elem.category === category)
			setProjectItems(filtered)
		}
	}

	return (
		<section className={`${style.portfolio} ${reusable.section}`} id='work'>
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Portfolio</h2>
			<p className={reusable.sectionSubtitle}>
				My <span>Cases</span>
			</p>

			<List list={navList} filterItems={filterItems}/>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				<AnimatePresence initial={false}>
					<Items projectItems={projectItems}/>
				</AnimatePresence>
			</div>
		</section>
	);
};