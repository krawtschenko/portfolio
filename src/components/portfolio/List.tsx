import { useState } from 'react'

import clsx from 'clsx'

import style from './portfolio.module.scss'

interface Props {
  filterItems: (category: string) => void
  list: string[]
}

export const List = ({ filterItems, list }: Props) => {
  const [active, setActive] = useState(0)

  return (
    <div className={style.list}>
      {list.map((category, index) => {
        return (
          <button
            className={clsx(active === index && style.active, style.listItem, 'text_cs')}
            key={index}
            onClick={() => {
              setActive(index)
              filterItems(category)
            }}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
