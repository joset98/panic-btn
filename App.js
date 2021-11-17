/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useReducer, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './src/screens/DrawerContent';
import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import RootStackScreen from './src/screens/RootStackScreen';
// contexts
import { AuthContext } from './src/contexts/authContext';
// reducers
import loginReducer from './src/reducers/authReducer';

import AsyncStorage from '@react-native-community/async-storage';


const Drawer = createDrawerNavigator();

const App = () => {
	// const [isLoading, setIsLoading] = React.useState(true);
	// const [userToken, setUserToken] = React.useState(null); 

	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null,
	};

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

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

	const authContext = useMemo(() => ({

		signIn: async ( foundUser ) => {
			// setUserToken('fgkj');
			// setIsLoading(false);
			try {
				console.log(foundUser);
				const response = await fetch(
					'https://test-server-panicbtn.herokuapp.com/api/v1/users/login',
					{
						method:'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(foundUser)
					}	
				);
				if (response.status === 500){
					alert('Ha ocurrido un error en el servidor');
					return ;
				}

				console.log(response)
				const userToken = response.headers.get('auth-token');
				await AsyncStorage.setItem('userToken', userToken);
				alert('Acceso a Usuario exitoso');
				dispatch({ type: 'LOGIN', token: userToken });

			} catch (e) {
				console.log(e);
			}
			// console.log('user token: ', userToken);
		},

		signOut: async () => {
			// setUserToken(null);
			// setIsLoading(false);
			try {
				await AsyncStorage.removeItem('userToken');
			} catch (e) {
				console.log(e);
			}
			dispatch({ type: 'LOGOUT' });
		},

		signUp: async (newUser) => {
			try {
				console.log(JSON.stringify(newUser));
				const response = await fetch(
					'https://test-server-panicbtn.herokuapp.com/api/v1/users/signup',
					{
						method:'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(newUser)
					}	
				);
				console.log(response.headers.get('auth-token'))
				const userToken = response.headers.get('auth-token');
				await AsyncStorage.setItem('userToken', userToken);
				alert('user created');

				dispatch({ type: 'REGISTER', token: userToken });

			} catch (error) {
				console.log('error');
				console.log(error);
				alert(error);
			} 
			// setUserToken('fgkj');
			// setIsLoading(false);
		},
		
		toggleTheme: () => {
			setIsDarkTheme(isDarkTheme => !isDarkTheme);
		}
	}), []);

	useEffect(() => {

		setTimeout(async () => {
			// setIsLoading(false);
			let userToken;
			userToken = null;
			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (e) {
				console.log(e);
			}
			// console.log('user token: ', userToken);
			dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
		}, 1000);
	}, []);

	if (loginState.isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<PaperProvider theme={theme}>

			<AuthContext.Provider value={authContext}>
				<NavigationContainer theme={theme}>

					{loginState.userToken !== null ? (
						<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
							<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
							<Drawer.Screen name="SupportScreen" component={SupportScreen} />
							<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
							<Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
						</Drawer.Navigator>
					)
						:
						<RootStackScreen />
					}

				</NavigationContainer>

			</AuthContext.Provider>
		</PaperProvider>
	);
}

export default App;
