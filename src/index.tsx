import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider, createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#DC1A27',
			contrastText: '#fff',
		},
		secondary: {
			main: '#2DFFA2',
			contrastText: '#fff',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: "'Julius Sans One', sans-serif",
					fontWeight: '300',
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
	</ThemeProvider>,
);
