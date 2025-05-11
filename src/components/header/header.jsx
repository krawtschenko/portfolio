import {useEffect, useState} from 'react';
import shapeOne from '../../assets/shape-1.png';
import {FaTelegramPlane, FaLinkedin, FaGithub} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import {links} from '../../app/data.js';
import {Link} from 'react-scroll';
import {animateScroll} from 'react-scroll';
import './header.scss';

const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	return theme;
};

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [theme, setTheme] = useState(getStorageTheme());
	const [scrollNav, setScrollNav] = useState(false);

	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
		} else {
			setTheme('light-theme');
		}
	};

	const scrollTop = () => {
		animateScroll.scrollToTop();
	};

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('no-scroll', showMenu);
	}, [showMenu]);

	useEffect(() => {
		document.body.style.overflow = showMenu ? 'hidden' : '';
	}, [showMenu]);

	return (
			<header className={`${scrollNav ? 'scroll-header' : ''} header`}>
				<nav className='nav'>
					<Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
						My Portfolio
					</Link>

					<div
							className={`nav__overlay ${showMenu ? 'show-overlay' : ''}`}
							onClick={() => setShowMenu(false)}
					/>

					<div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
						<div className='nav__data'>
							<ul className='nav__list'>
								{links.map(({name, path}, index) => {
									return (
											<li className='nav__item' key={index}>
												<Link
														className='nav__link text-cs'
														to={path}
														spy={true}
														hashSpy={true}
														smooth={true}
														offset={-300}
														duration={500}
														onClick={() => setShowMenu(!showMenu)}
												>
													{name}
												</Link>
											</li>
									);
								})}
							</ul>

							<div className='header__socials'>
								<a
										href='https://github.com/krawtschenko'
										target='_blank'
										className='header__social-link'
								>
									<FaGithub/>
								</a>

								<a
										href='https://linkedin.com/in/krawtschenko'
										target='_blank'
										className='header__social-link'
								>
									<FaLinkedin/>
								</a>

								<a
										href='https://telegram.me/krawtschenko'
										target='_blank'
										className='header__social-link'
								>
									<FaTelegramPlane/>
								</a>
							</div>
						</div>

						<div className='section__deco header__deco deco__left'>
							<img src={shapeOne} alt='shapeOne' className='shape'/>
						</div>
					</div>

					<div className='nav__btns'>
						<div className='theme__toggler' onClick={toggleTheme}>
							{theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
						</div>

						<div
								className={`${
										showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'
								}`}
								onClick={() => setShowMenu(!showMenu)}
						>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</header>
	);
};

