import React from 'react';
import profileImg from 'assets/profile-img.png'
import shape1 from 'assets/shape-1.png'
import shape2 from 'assets/shape-2.png'
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import {
	EPosition,
	HomeBanner,
	HomeButtons,
	HomeContainer,
	HomeData,
	HomeDataSpanFour,
	HomeDataSpanOne,
	HomeDataSpanThree,
	HomeDataSpanTwo,
	HomeImgWrapper,
	HomeJob,
	HomeMain,
	HomeSocials,
	HomeSubtitle,
	HomeText,
	HomeTitle
} from "components/home/home.styled";
import {Button, EShapes, HeroLink, Shape} from "common/styles/reusable";

export const Home = () => {
	return (
		<HomeMain>
			<HomeContainer>
				<HomeSubtitle>
					HELLO, <span>MY NAME IS</span>
				</HomeSubtitle>

				<HomeTitle>
					<span>Pan</span> Slawita
				</HomeTitle>

				<HomeJob>
					<span>I AM</span> <b>Web Developer</b>
				</HomeJob>

				<HomeImgWrapper>
					<HomeBanner>
						<img src={profileImg} alt="profileImg"/>
					</HomeBanner>

					<HomeData position={EPosition.LEFT}>
						<HomeDataSpanOne> {/*span #1*/}
							12 <b>+</b>
						</HomeDataSpanOne>

						<HomeDataSpanTwo> {/*span #2*/}
							YEARS OF <span>EXPERIENCE</span>
						</HomeDataSpanTwo>
					</HomeData>

					<HomeData position={EPosition.RIGHT}>
						<HomeDataSpanThree>300</HomeDataSpanThree> {/*span #3*/}

						<HomeDataSpanFour> {/*span #4*/}
							COMPLETED <span>PROJECTS</span>
						</HomeDataSpanFour>
					</HomeData>

					<Shape styles={EShapes.SHAPE1} src={shape1}/>
					<Shape styles={EShapes.SHAPE2} src={shape2}/>
					<Shape styles={EShapes.SHAPE3} src={shape2}/>
				</HomeImgWrapper>

				<HomeText>
					From Ukraine. I have rich experience in front-end development, also I am good in back-end development.
					I love to talk with you about our unique
				</HomeText>

				<HomeSocials>
					<a href='#'>
						<FaFacebook/>
					</a>
					<a href='#'>
						<FaLinkedin/>
					</a>
					<a href='#'>
						<FaGithub/>
					</a>
				</HomeSocials>

				<HomeButtons>
					<Button href='#'>
						Download CV
					</Button>
					<HeroLink href='#'>
						My Skills
					</HeroLink>
				</HomeButtons>
			</HomeContainer>
		</HomeMain>
	);
};