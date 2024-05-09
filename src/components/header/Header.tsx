import { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll'

import { links } from '@/common/data'
import clsx from 'clsx'
import { BsMoon, BsSun } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import style from './header.module.scss'

const getStorageTheme = () => {
  let theme = 'light-theme'

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme') ?? 'light-theme'
  }

  return theme
}

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)
  const [theme, setTheme] = useState(getStorageTheme())

  const scrollTop = () => {
    animateScroll.scrollToTop()
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', changeNav)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu)
  }, [showMenu])

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className={scrollNav ? clsx(style.header, style.scrollHeader) : style.header}>
      <nav className={style.nav}>
        <Link className={clsx(style.logo, 'text_cs')} onClick={scrollTop} to={'/'}>
          Portfolio
        </Link>

        <div className={showMenu ? clsx(style.menu, style.showMenu) : style.menu}>
          <div className={style.data}>
            <ul className={style.list}>
              {links.map(({ name, path }, index) => {
                return (
                  <li className={style.item} key={index}>
                    <Link
                      className={clsx(style.link, 'text_cs')}
                      duration={500}
                      hashSpy
                      offset={-150}
                      onClick={() => setShowMenu(!showMenu)}
                      smooth
                      spy
                      to={path}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>

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
          </div>
        </div>

        <div className={style.btns}>
          <div className={style.themeToggle} onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={showMenu ? clsx(style.navToggle, style.animateToggle) : style.navToggle}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}
