import shapeTwo from '@/assets/shape-2.png'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

import style from './portfolio.module.scss'

interface Props {
  projectItems: {
    category: string
    description: string
    id: number
    img: string
    title: string
  }[]
}

export const Items = ({ projectItems }: Props) => {
  return (
    <>
      {projectItems.map(projectItem => {
        const { category, description, id, img, title } = projectItem

        return (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={clsx(style.items, 'card', 'cardTwo')}
            exit={{ opacity: 0.8, scale: 0.6 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            key={id}
            layout
            transition={{ duration: 0.3 }}
          >
            <div className={style.imgWrapper}>
              <img alt={'img'} src={img} />
            </div>

            <span className={clsx(style.category, 'text_cs')}>{category}</span>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>

            <div className={style.linkWrap}>
              <a className={clsx(style.link, 'link')} href={'#'}>
                <span>View Demo</span>
                <FaArrowRight className={'linkIcon'}></FaArrowRight>
              </a>
            </div>
            <div className={style.linkWrap}>
              <a className={clsx(style.link, 'link')} href={'#'}>
                <span>View Code</span>
                <FaArrowRight className={'linkIcon'}></FaArrowRight>
              </a>
            </div>

            <img alt={'shapeTwo'} className={`shape c_shape`} src={shapeTwo} />
          </motion.div>
        )
      })}
    </>
  )
}
