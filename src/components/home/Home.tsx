import React from 'react';
import profileImg from 'assets/profile-img.png'
import shapeOne from 'assets/shape-1.png'
import shapeTwo from 'assets/shape-2.png'
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {
	HomeButtons,
	HomeContainer,
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
					<span>Serhii</span> Slavita
				</HomeTitle>

				<HomeJob>
					<span>I AM</span> <b>Web Developer</b>
				</HomeJob>

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