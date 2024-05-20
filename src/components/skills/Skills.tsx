import shapeOne from '@/assets/shape-1.png'
import shapeTwo from '@/assets/shape-2.png'
import { skills } from '@/common/data'
import clsx from 'clsx'

import style from './skills.module.scss'

export const Skills = () => {
  return (
    <section className={clsx(style.skills, 'section')} id={'skills'}>
      <h2 className={'sectionTitle text_cs'}>Professional Skills</h2>
      <p className={'sectionSubtitle'}>
        My <span>Technologies and Tools</span>
      </p>

      <div className={clsx(style.container, 'container grid')}>
        {skills.map(({ id, logo, name }) => {
          return (
            <div className={style.item} key={id}>
              <div className={style.logo}>
                <img alt={'logo'} src={logo} />
                <h3 className={style.name}>{name}</h3>
              </div>

              <img alt={'shapeTwo'} className={`shape ${style.shape}`} src={shapeTwo} />
            </div>
          )
        })}
      </div>

      <div className={'section__deco deco__right'}>
        <img alt={'shapeOne'} className={'shape'} src={shapeOne} />
      </div>
    </section>
  )
}
