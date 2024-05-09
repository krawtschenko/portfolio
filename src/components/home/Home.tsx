import profileImg from '@/assets/images/profile-img.png'
import shapeOne from '@/assets/shape-1.png'
import shapeTwo from '@/assets/shape-2.png'
import clsx from 'clsx'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import style from './home.module.scss'

export const Home = () => {
  return (
    <section className={style.home} id={'home'}>
      <div className={style.wrapper}>
        <div className={clsx(style.container, 'container')}>
          <p className={clsx(style.subtitle, 'text_cs')}>
            Hello, <span>my name is</span>
          </p>

          <h1 className={clsx(style.title, 'text_cs')}>
            <span>Zoe</span> Miller
          </h1>

          <p className={style.job}>
            <span className={'text_cs'}>I am</span> <b>Web Developer</b>
          </p>

          <div className={style.imgWrapper}>
            <div className={style.banner}>
              <img alt={'profileImg'} src={profileImg} />
            </div>

            <p className={clsx(style.data, style.dataOne)}>
              <span className={style.text_lg}>
                12 <b>+</b>
              </span>

              <span className={clsx(style.text_sm, 'text_cs')}>
                Years of <span>experience</span>
              </span>
            </p>

            <p className={`${style.data} ${style.dataTwo}`}>
              <span className={style.text_lg}>330</span>

              <span className={clsx(style.text_sm, 'text_cs')}>
                Completed <span>projects</span>
              </span>
            </p>

            <img alt={'shape1'} className={clsx(style.shapeOne, 'shape')} src={shapeOne} />
            <img alt={'shape2'} className={clsx(style.shapeTwo, 'shape')} src={shapeTwo} />
            <img alt={'shape2'} className={clsx(style.shapeThree, 'shape')} src={shapeTwo} />
          </div>

          <p className={style.text}>
            From Ukraine. I have rich experience in front-end development, also I am good in
            back-end development. I love to talk with you about our unique
          </p>

          <div className={style.socials}>
            <a className={style.socialLink} href={'#'}>
              <FaLinkedin />
            </a>
            <a className={style.socialLink} href={'#'}>
              <FaGithub />
            </a>
            <a className={style.socialLink} href={'#'}>
              <FaFacebook />
            </a>
          </div>

          <div className={style.buttons}>
            <a className={clsx('btn', 'text_cs')} href={'#'}>
              Download CV
            </a>
            <a className={clsx('heroLink', 'text_cs')} href={'#'}>
              My skills
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
