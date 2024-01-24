import {createGlobalStyle} from "styled-components";
import {theme} from "common/styles/theme.styled";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	button, input, body {
		font-family: ${theme.typography.bodyFont};
		font-size: ${theme.typography.normalFontSize};
	}

	body {
		color: ${theme.colors.textColor};
		background-color: ${theme.colors.bgColor};
	}

	h1, h2, h3 {
		color: ${theme.colors.titleColor};
		font-weight: 700;
	}

	ul {
		list-style: none;
	}

	p {
		line-height: 1.7;
	}

	a {
		text-decoration: none;
	}

	input, textarea, button {
		border: none;
		outline: none;
		background: transparent;
	}
	
	button {
		cursor: pointer;
	}
	
	img {
		max-width: 100%;
	}
`