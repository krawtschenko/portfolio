import React from 'react';
import profileImg from 'assets/profile-img.png'
import shapeOne from 'assets/shape-1.png'
import shapeTwo from 'assets/shape-2.png'
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {
	HomeBanner,
	HomeButtons,
	HomeContainer, HomeData, HomeImgWrapper,
	HomeJob,
	HomeMain,
	HomeSocials,
	HomeSubtitle,
	HomeText,
	HomeTitle
} from "components/home/home.styled";
import {Button, HeroLink} from "common/styles/reusable";

export const Home = () => {
	return (
		<HomeMain>
			<HomeContainer>
				<HomeSubtitle>
					HELLO, <span>MY NAME IS</span>
				</HomeSubtitle>

				<HomeTitle>
					<span>Pan</span> Slavita
				</HomeTitle>

				<HomeJob>
					<span>I AM</span> <b>Web Developer</b>
				</HomeJob>

				<HomeImgWrapper>
					<HomeBanner>
						<img src={profileImg} alt="profileImg"/>
					</HomeBanner>

					<HomeData>
						<span>330</span>
						<span>Completed <b>Projects</b></span>
					</HomeData>
					<HomeData>
						<span>4 <b>+</b></span>
						<span>Years of <b>Experience</b></span>
					</HomeData>
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