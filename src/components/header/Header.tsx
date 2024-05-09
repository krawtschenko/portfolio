import style from "./header.module.css"
import reusable from "common/styles/reusable.module.css"
import {links} from "app/data";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import {BsSun, BsMoon} from 'react-icons/bs'
import {useEffect, useState} from "react";
import {Link, animateScroll} from 'react-scroll'

const getStorageTheme = () => {
	let theme = 'light-theme'

	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme') ?? 'light-theme'
	}

	return theme
}

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);
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
	}, []);

	useEffect(() => {
		document.body.classList.toggle('no-scroll', showMenu)
	}, [showMenu]);

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme]);

	return (
		<header className={scrollNav ? `${style.header} ${style.scrollHeader}` : style.header}>
			<nav className={style.nav}>
				<Link to='/' onClick={scrollTop} className={`${style.logo} ${reusable.text_cs}`}>Portfolio</Link>

				<div className={showMenu ? `${style.menu} ${style.showMenu}` : style.menu}>
					<div className={style.data}>
						<ul className={style.list}>
							{links.map(({path, name}, index) => {
								return (
									<li key={index} className={style.item}>
										<Link
											className={`${style.link} ${reusable.text_cs}`}
											to={path}
											spy={true}
											smooth={true}
											hashSpy={true}
											offset={-150}
											duration={500}
											onClick={() => setShowMenu(!showMenu)}
										>
											{name}
										</Link>
									</li>
								)
							})}
						</ul>

						<div className={style.socials}>
							<a href={"#"} className={style.socialLink}>
								<FaLinkedin/>
							</a>
							<a href={"#"} className={style.socialLink}>
								<FaGithub/>
							</a>
							<a href={"#"} className={style.socialLink}>
								<FaFacebook/>
							</a>
						</div>
					</div>
				</div>

				<div className={style.btns}>
					<div className={style.themeToggle} onClick={toggleTheme}>
						{theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
					</div>

					<div onClick={() => setShowMenu(!showMenu)}
					     className={showMenu ? `${style.navToggle} ${style.animateToggle}` : style.navToggle}>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
		</header>
	)
}