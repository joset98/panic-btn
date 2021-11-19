/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useMemo, useState } from 'react';
import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import {
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

// auth Service
import AuthProvider from './src/providers/AuthProvider';
import MainApp from './src/screens/MainApp';
import { ThemeContext } from './src/contexts/themeContext';
// import { AuthContext } from './src/contexts/authContext';


const App = () => {

	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const CustomDefaultTheme = {
		...NavigationDefaultTheme,
		...PaperDefaultTheme,
		colors: {
			...NavigationDefaultTheme.colors,
			...PaperDefaultTheme.colors,
			background: '#ffffff',
			text: '#333333'
		}
	}

	const CustomDarkTheme = {
		...NavigationDarkTheme,
		...PaperDarkTheme,
		colors: {
			...NavigationDarkTheme.colors,
			...PaperDarkTheme.colors,
			background: '#333333',
			text: '#ffffff'
		}
	}

	const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

	const authContext = useMemo(() => ({
		toggleTheme: () => {
			setIsDarkTheme(isDarkTheme => !isDarkTheme);
		}
	}), []);

	const themeContext = useMemo(() => ({
		toggleTheme: () => {
			setIsDarkTheme(isDarkTheme => !isDarkTheme);
		}
	}), []);



	return (
		<PaperProvider theme={theme}>

			<ThemeContext.Provider value={themeContext}>

				<AuthProvider>

					{/* <AuthContext.Provider value={authContext}> */}
					<MainApp theme={theme} />
					{/* </AuthContext.Provider> */}

				</AuthProvider>

			</ThemeContext.Provider>
			
		</PaperProvider>
	);
}

export default App;
