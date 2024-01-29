import styled from "styled-components";
import {theme} from "common/styles/theme.styled";
import {Container, HeroLink} from "common/styles/reusable";

const {colors} = theme
const {typography} = theme

export const HomeMain = styled.section`
	background-color: ${colors.firstGradient};
	min-height: 100vh;
	display: grid;
	align-items: center;
`
export const HomeContainer = styled(Container)`
	width: 100%;
	position: relative;
`
export const HomeSubtitle = styled.p`
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-size: ${typography.smallFontSize};

	span {
		color: ${colors.primaryColor};
	}
`
export const HomeTitle = styled.h1`
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-size: ${typography.biggestFontSize};
	text-shadow: 2px 2px hsl(0, 0%, 0%),
	-2px 2px hsl(0, 0%, 0%),
	2px -2px hsl(0, 0%, 0%),
	-2px -2px hsl(0, 0%, 0%),
	5px 5px rgb(0 0 0 / 20%);
	line-height: 1.2;
	margin-top: 15px;

	span {
		color: ${colors.primaryColor};
	}
`
export const HomeJob = styled.p`
	font-weight: 700;

	span {
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: ${typography.smallFontSize};
	}

	b {
		font-family: ${typography.secondFont};
		font-size: ${typography.h2FontSize};
		margin-left: 10px;
	}
`
export const HomeImgWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 12px;
	width: 100%;
	max-width: 680px;
`
export const HomeBanner = styled.div`
	background-color: ${colors.primaryColor};
	padding-bottom: 100%;
	border-radius: 50%;
	position: relative;
	
	img {
		position: absolute;
		bottom: 0;
		height: 800px;
		border-radius: 500px;
		object-fit: cover;
	}
`
export const HomeData = styled.p`
	position: absolute;
	border: 2px solid ${colors.borderColor};
	background: ${colors.containerColor};
	box-shadow: ${theme.shadow};
	padding-inline: 20px;
	width: 250px;
	height: 82px;
	border-radius: 82px;
	display: flex;
	align-items: center;

	&:nth-child(odd) {
		bottom: 20%;
		left: -4%;
	}

	&:nth-child(even) {
		bottom: 12%;
		right: 6%;
	}

	span {
		width: 50%;
		color: ${colors.titleColor};
		font-weight: 700;

		&:nth-child(odd) {
			text-align: center;
			font-size: 37px;
		}
		
		b {
			color: ${colors.primaryColor};
		}
	}
`
export const HomeText = styled.p`
	font-size: ${typography.largeFontSize};
	margin-block: 40px 28px;
	max-width: 520px;
`
export const HomeSocials = styled.p`
	display: flex;
	column-gap: 20px;
	margin-bottom: 30px;

	a {
		color: ${colors.titleColor};
		font-size: ${typography.h5FontSize};
		transition: all 0.7s ${theme.transition};

		&:hover {
			color: ${colors.primaryColor};
		}
	}
`
export const HomeButtons = styled.div`
	display: flex;
	column-gap: 70px;
`