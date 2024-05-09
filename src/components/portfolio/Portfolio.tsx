import { useState } from 'react'

import { projects } from '@/common/data'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'

import style from './portfolio.module.scss'

import { Items } from './Items'
import { List } from './List'

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
    <section className={clsx(style.portfolio, 'section')} id={'work'}>
      <h2 className={clsx('sectionTitle', 'text_cs')}>Portfolio</h2>
      <p className={'sectionSubtitle'}>
        My <span>Cases</span>
      </p>

      <List filterItems={filterItems} list={navList} />

      <div className={clsx(style.container, 'container', 'grid')}>
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  )
}
