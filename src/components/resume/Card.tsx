import { useState } from 'react'

import clsx from 'clsx'

import style from './resume.module.scss'

interface Props {
  date: string
  description: string
  subtitle: string
  title: string
}

export const Card = (props: Props) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className={style.item}>
      <div className={style.header} onClick={() => setShowInfo(!showInfo)}>
        <h3 className={style.subtitle}>{props.title}</h3>
        <span className={style.icon}>{showInfo ? '-' : '+'}</span>
      </div>

      <div className={`${showInfo ? style.show : ''} ${style.content}`}>
        <div className={style.dateTitle}>
          <h3 className={style.title}>{props.subtitle}</h3>
          <span className={clsx(style.date, 'text_cs')}>{props.date}</span>
        </div>

        <p className={style.description}>{props.description}</p>
      </div>
    </div>
  )
}
