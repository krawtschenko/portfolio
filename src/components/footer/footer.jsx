import {FaTelegramPlane, FaLinkedin, FaGithub} from 'react-icons/fa';
import './footer.scss';

export const Footer = () => {
	return (
			<footer className='footer'>
				<div className='footer__container container grid'>
					<div className='footer__socials'>
						<a
								href='https://github.com/krawtschenko'
								target='_blank'
								className='footer__social-link'
						>
							<FaGithub/>
						</a>

						<a
								href='https://linkedin.com/in/krawtschenko'
								target='_blank'
								className='footer__social-link'
						>
							<FaLinkedin/>
						</a>

						<a
								href='https://telegram.me/krawtschenko'
								target='_blank'
								className='footer__social-link'
						>
							<FaTelegramPlane/>
						</a>
					</div>

					<p className='footer__copyright text-cs'>
						&copy; 2025 <span>Portfolio</span>. All Rights Reserved
					</p>

					<p className='footer__copyright text-cs'>
						Developed By <span>Eugene Kravchenko</span>
					</p>
				</div>
			</footer>
	);
};
