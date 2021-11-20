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
import useAuthUser from '../hooks/useAuthUser';

const Drawer = createDrawerNavigator();

const MainApp = ({ theme }) => {
    const auther = useAuthUser();
    const { token: authToken, getAuthUser, isLoading, retriveStorageToken } = auther;
    console.log('auther')
    console.log(auther)
    console.log(authToken)

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

            let userToken;
            userToken = null;

            try {

                // userToken = await AsyncStorage.getItem('userToken');
                await retriveStorageToken();
                // if ( userToken )
                await getAuthUser();

            } catch (e) {
                console.log(e);
            }

        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer theme={theme}>

            {
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
