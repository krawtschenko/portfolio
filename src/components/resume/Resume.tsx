import React from 'react';
import style from './resume.module.css'
import reusable from 'common/styles/reusable.module.css'
import {cv} from "app/data";
import {Card} from "./Card";

export const Resume = () => {
	return (
		<div className={`${style.resume} ${reusable.section}`} id='resume'>
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Resume</h2>
			<p className={reusable.sectionSubtitle}>
				My <span>Story</span>
			</p>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				<div className={style.group}>
					<h3 className={style.heading}>Education</h3>
					<div className={style.items}>
						{cv.map((elem, index) => {
							if (elem.category === 'education') {
								return <Card
									key={index}
									title={elem.title}
									subtitle={elem.subtitle}
									date={elem.date}
									description={elem.description}
								/>
							}
						})}
					</div>
				</div>

				<div className={style.group}>
					<h3 className={style.heading}>Experience</h3>
					<div className={style.items}>
						{cv.map((elem, index) => {
							if (elem.category === 'experience') {
								return <Card
									key={index}
									title={elem.title}
									subtitle={elem.subtitle}
									date={elem.date}
									description={elem.description}
								/>
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
}