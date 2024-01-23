import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "common/styles/theme.styled";
import {GlobalStyles} from "common/styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<ThemeProvider theme={theme}>
		<App/>
		<GlobalStyles/>
	</ThemeProvider>,
);
