import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from './theme.js';
import '@/index.css';
import { routes } from './routes.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

function Boot(props) {
	if (!import.meta.env.VITE_INITIAL_TOKEN) {
		throw new Error('VITE_INITIAL_TOKEN not defined');
	}

	if (!import.meta.env.VITE_WSO2_URL) {
		throw new Error('VITE_WSO2_URL');
	}

	if (!import.meta.env.VITE_UMS_BASE_URL) {
		throw new Error('VITE_UMS_BASE_URL');
	}

	if (!import.meta.env.VITE_CMS_BASE_URL) {
		throw new Error('VITE_CMS_BASE_URL');
	}

	return props.children;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<Boot>
					<RouterProvider router={router} />
				</Boot>
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
