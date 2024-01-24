import styled from "styled-components";
import {theme} from "common/styles/theme.styled";

export const Container = styled.div`
	max-width: 1300px;
	margin-inline: auto;
	padding-inline: 12px;
`

export const HeroLink = styled.a`
	color: ${theme.colors.titleColor};
	font-size: ${theme.typography.tinyFontSize};
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	height: 56px;
	display: grid;
	place-items: center;
	position: relative;
`

export const Button = styled(HeroLink)`
	border: 2px solid ${theme.colors.borderColor};
	padding-inline: 40px;
	border-radius: 56px;
	box-shadow: ${theme.shadow};

	&::before {
		content: '';
		position: absolute;
		inset: 2px;
		background-color: ${theme.colors.primaryColor};
		border-radius: inherit;
		transform: scale(0.3);
		filter: blur(10px);
		opacity: 0;
		transition: all 0.7s ${theme.transition};
		z-index: -1;
	}

	&:hover::before {
		transform: scale(1);
		filter: blur(0);
		opacity: 1;
	}
`