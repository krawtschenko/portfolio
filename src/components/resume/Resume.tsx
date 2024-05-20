import shapeOne from '@/assets/shape-1.png'
import { cv } from '@/common/data'
import clsx from 'clsx'

import style from './resume.module.scss'

import { Card } from './Card'

export const Resume = () => {
  return (
    <div className={clsx(style.resume, 'section')} id={'resume'}>
      <h2 className={'sectionTitle text_cs'}>Resume</h2>
      <p className={'sectionSubtitle'}>
        My <span>Story</span>
      </p>

      <div className={clsx(style.container, 'container grid')}>
        <div className={style.group}>
          <h3 className={style.heading}>Education</h3>
          <div className={style.items}>
            {cv.map((elem, index) => {
              if (elem.category === 'education') {
                return (
                  <Card
                    date={elem.date}
                    description={elem.description}
                    key={index}
                    subtitle={elem.subtitle}
                    title={elem.title}
                  />
                )
              }
            })}
          </div>
        </div>

        <div className={style.group}>
          <h3 className={style.heading}>Experience</h3>
          <div className={style.items}>
            {cv.map((elem, index) => {
              if (elem.category === 'experience') {
                return (
                  <Card
                    date={elem.date}
                    description={elem.description}
                    key={index}
                    subtitle={elem.subtitle}
                    title={elem.title}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>

      <div className={'section__deco deco__right'}>
        <img alt={'shapeOne'} className={'shape'} src={shapeOne} />
      </div>
    </div>
  )
}
