import profileImg from "assets/profile-img.png"
import shapeOne from "assets/shape-1.png"
import shapeTwo from "assets/shape-2.png"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import style from "components/home/home.module.css"
import reusable from "common/styles/reusable.module.css"

export const Home = () => {
	return (
		<section className={style.home} id="home">
			<div className={style.wrapper}>
				<div className={`${style.container} ${reusable.container}`}>
					<p className={`${style.subtitle} ${reusable.text_cs}`}>
						Hello, <span>my name is</span>
					</p>

					<h1 className={`${style.title} ${reusable.text_cs}`}>
						<span>Zoe</span> Miller
					</h1>

					<p className={style.job}>
						<span className={reusable.text_cs}>I am</span> <b>Web Developer</b>
					</p>

					<div className={style.imgWrapper}>
						<div className={style.banner}>
							<img src={profileImg} alt="profileImg"/>
						</div>

						<p className={`${style.data} ${style.dataOne}`}>
					 <span className={style.text_lg}>
						 12 <b>+</b>
					 </span>

							<span className={`${style.text_sm} ${reusable.text_cs}`}>
						 Years of <span>experience</span>
					 </span>
						</p>

						<p className={`${style.data} ${style.dataTwo}`}>
							<span className={style.text_lg}>330</span>

							<span className={`${style.text_sm} ${reusable.text_cs}`}>
						 Completed <span>projects</span>
					 </span>
						</p>

						<img src={shapeOne} alt="shape1" className={`${reusable.shape} ${style.shapeOne}`}/>
						<img src={shapeTwo} alt="shape2" className={`${reusable.shape} ${style.shapeTwo}`}/>
						<img src={shapeTwo} alt="shape2" className={`${reusable.shape} ${style.shapeThree}`}/>
					</div>

					<p className={style.text}>
						From Ukraine. I have rich experience in front-end development, also I am good in back-end development.
						I love to talk with you about our unique
					</p>

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

					<div className={style.buttons}>
						<a href={"#"} className={`${reusable.btn} ${reusable.text_cs}`}>Download CV</a>
						<a href={"#"} className={`${reusable.heroLink} ${reusable.text_cs}`}>My skills</a>
					</div>
				</div>
			</div>
		</section>
	);
};