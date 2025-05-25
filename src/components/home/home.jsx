import sticker from '../../assets/sticker.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import {Link} from 'react-scroll';
import {FaTelegramPlane, FaLinkedin, FaGithub} from 'react-icons/fa';
// import CV from '../../assets/Zoe-Cv.pdf';
import './home.scss';

export const Home = () => {
	return (
			<section className='home' id='home'>
				<div className='home__wrapper'>
					<div className='home__container container'>
						<p className='home__subtitle text-cs'>
							Hello, <span>My Name Is</span>
						</p>

						<h1 className='home__title text-cs'>
							<span>Yevhenii</span>
							<br/>
							Kravchenko
						</h1>

						<p className='home__job'>
							<span className='text-cs'>I Am</span> <b>Web Developer</b>
						</p>

						<div className='home__img-wrapper'>
							<div className='home__banner'>
								<img src={sticker} alt='' className='home__profile'/>
							</div>

							<p className='home__data home__data-one'>
              <span className='text-lg'>
                2 <b>+</b>
              </span>

								<span className='text-sm text-cs'>
                Years of <span>Experience</span>
              </span>
							</p>

							<img src={shapeOne} alt='shapeOne' className='shape shape__1'/>
							<img src={shapeTwo} alt='shapeTwo' className='shape shape__2'/>
							<img src={shapeTwo} alt='shapeTwo' className='shape shape__3'/>
						</div>

						<p className='home__text'>
							I'm a passionate web developer focused on front-end development with React and TypeScript. I
							enjoy building modern web interfaces and constantly improving my skills
						</p>

						<div className='home__socials'>
							<a
									href='https://github.com/krawtschenko'
									target='_blank'
									className='home__socials-link'
							>
								<FaGithub/>
							</a>

							<a
									href='https://linkedin.com/in/krawtschenko'
									target='_blank'
									className='home__socials-link'
							>
								<FaLinkedin/>
							</a>

							<a
									href='https://telegram.me/krawtschenko'
									target='_blank'
									className='home__socials-link'
							>
								<FaTelegramPlane/>
							</a>
						</div>

						<div className='home__btns'>
							{/*<a download href={CV} className='btn text-cs'>*/}
							<a download className='btn text-cs'>
								Download CV
							</a>

							<Link
									className='hero__link text-cs'
									to='skills'
									spy={true}
									hashSpy={true}
									smooth={true}
									offset={-150}
									duration={500}
							>
								My Skills
							</Link>
						</div>
					</div>

					<div className='section__deco deco__left'>
						<img src={shapeOne} alt='shapeOne' className='shape'/>
					</div>
				</div>

				<div className='section__bg-wrapper'>
					<span className='bg__title'>Web Developer</span>
				</div>
			</section>
	);
};

