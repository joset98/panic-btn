import React, { useEffect, useReducer, useMemo, useState, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './DrawerContent';
import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BookmarkScreen from './BookmarkScreen';
import RootStackScreen from './RootStackScreen';
// Storage
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import loginReducer, { initialLoginState } from '../reducers/authReducer';
// auth Service
import {getUser, login, signup} from '../authService';
import useAuthUser from '../hooks/useAuthUser';

const Drawer = createDrawerNavigator();
 
const MainApp = ({ theme }) => {
    // const [userToken, setUserToken] = React.useState(null); 
    const auther = useAuthUser();
    const {token: authToken} = auther;
    console.log('auther')
    console.log(auther)

    // const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
 
    const authContext = useMemo(() => ({
        getAuthUser: async () => {

            console.log('berfore getme in app')
            console.log(loginState)
            if( !loginState.authToken )
                return ;
            console.log('after getme')

            try {
                const user = await getUser(loginState.authToken);
                console.log('response useauth')
                console.log(user)				
                
            } catch (error) {
                console.log(error)				
                alert('there was an error')
            }
        },

        actionAuth: () => {
            console.log('begin action')
            dispatch({ type: 'ACTION_AUTH' });

        },

        signIn: async ( foundUser ) => {

            try {
                dispatch({ type: 'ACTION_LOGIN' });
                console.log(foundUser);
                const userToken = await login(foundUser);
                await AsyncStorage.setItem('userToken', userToken);

                alert('Acceso a Usuario exitoso');
                dispatch({ type: 'LOGIN', token: userToken });

            } catch (e) {
                dispatch({ type: 'ERROR_ACTION' });
                console.log('error');
                console.log(...e);
            }
            // console.log('user token: ', userToken);
        },

        signOut: async () => {

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
                const userToken = await signup(newUser);
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
 /*
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
             console.log('first')
             console.log(userToken)
 
             dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
         }, 1000);
     }, []);
*/
    useEffect(() => {
        setTimeout(async () => {
            await getAuthUser();
        }, 1000);
    }, []);

     /*
     if (loginState.isLoading) {
         return (
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <ActivityIndicator size="large" />
             </View>
         );
     }
     */
     // if (isLoading) {
     // 	return (
     // 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     // 			<ActivityIndicator size="large" />
     // 		</View>
     // 	);
     // }
 
     return (
            <NavigationContainer theme={theme}>

                    {
                    // loginState.authToken !== null ? 
                    // loginState.authToken !== null 
                    // true? 
                    authToken !== null ?
                    (
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
     );
 }
 
export default MainApp;
 