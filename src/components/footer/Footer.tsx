import clsx from 'clsx'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import style from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={clsx(style.container, 'container', 'grid')}>
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

        <p className={clsx(style.copyright, 'text_cs')}>
          © 2024 <span>Portfolio</span>. All Rights Reserved
        </p>

        <p className={clsx(style.copyright, 'text_cs')}>
          Developed by <span>Eugen Kravchenko</span>
        </p>
      </div>
    </footer>
  )
}
