import React from 'react';
import style from './footer.module.css'
import reusable from "common/styles/reusable.module.css"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
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

				<p className={`${style.copyright} ${reusable.text_cs}`}>© 2024 <span>Portfolio</span>. All Rights Reserved</p>


				<p className={`${style.copyright} ${reusable.text_cs}`}>Developed by <span>Eugen Kravchenko</span></p>
			</div>
		</footer>
	);
}