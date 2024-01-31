import styled, {css} from "styled-components";
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
	z-index: 1;
	transition: all 0.7s ${theme.transition};

	&:hover {
		color: ${theme.colors.primaryColor};
	}

	// &::before {
	// 	content: '';
	// 	position: absolute;
	// 	top: 50%;
	// 	left: -96%;
	// 	transform: translateY(-50%);
	// 	width: 40px;
	// 	height: 2px;
	// 	background-color: ${theme.colors.borderColor};
	// }
`

export const Button = styled(HeroLink)`
	border: 2px solid ${theme.colors.borderColor};
	padding-inline: 40px;
	border-radius: 56px;
	box-shadow: ${theme.shadow};

	&:hover {
		color: ${theme.colors.bgColor};
	}
	
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

export enum EShapes {
	SHAPE1,
	SHAPE2,
	SHAPE3
}

const shapesCss = {
	[EShapes.SHAPE1]: css`
		width: 226px;
		height: 226px;
		top: -35px;
		right: 6%;
	`,
	[EShapes.SHAPE2]: css`
		bottom: 8%;
		left: -13%;
		width: 141px;
		height: 141px;
	`,
	[EShapes.SHAPE3]: css`
		bottom: 0;
		right: -7%;
		width: 141px;
		height: 141px;
	`
}

export const Shape = styled.img<{ styles: EShapes }>`
	position: absolute;
	filter: invert(1);
	opacity: 0.6;

	${({styles}) => shapesCss[styles]}
`