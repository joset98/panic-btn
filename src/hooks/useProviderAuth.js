import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";

import { getUser, login, signup } from "../authService";
import CustomDarkTheme from "../themes/darkTheme";
import CustomDefaultTheme from "../themes/defaultTheme";

export const useProviderAuth = () => {

    const [user, setUser] = useState({});

    const [token, setToken] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const currentTheme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const retriveStorageToken = async() => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            console.log(`valid token ${userToken}`);
            
            if ( !userToken )
                return ;

            if( token && token === userToken){
                return ;
            }

            setToken(userToken);

        } catch (error) {
            console.log(error)				
        
        }
    };

    const getAuthUser = async () => {

        console.log('berfore getme in providerAuth')
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            console.log(`token ${userToken}`);
            if( !token && !userToken ){
                setIsLoading(false);
                return ;
            }
            console.log('after getme')

            const authUser = await getUser(token);
            console.log('setting useauth')
            console.log(authUser)				
            setUser(authUser)
        } catch (error) {
            console.log(error)				
            alert('there was an error')
        }
        setIsLoading(false);
    };

    const signIn = async ( user ) => {
        
        setIsLoading(true);
        console.log('useProviderAuth login true')
        try {
            console.log(user);
            const userToken = await login(user);
            if (typeof userToken !== 'string')
                throw 'user token lost'
            await AsyncStorage.setItem('userToken', userToken);
            setToken(userToken);
            alert('Acceso a Usuario exitoso');

        } catch (e) {
            console.log('error');
            console.log(e);
        }
        setIsLoading(false);

    };


    const signOut = async () => {
        console.log('signout')
        try {
            await AsyncStorage.removeItem('userToken');
        } catch (e) {
            console.log(e);
        }

        setUser(null)
        setToken(null)
        setIsLoading(false)
    };

    const signUp = async (newUser) => {
        setIsLoading(true);
        try {
            console.log(JSON.stringify(newUser));
            const userToken = await signup(newUser);
            await AsyncStorage.setItem('userToken', userToken);
            setToken(userToken);
            alert('user created');

        } catch (error) {
            console.log('error');
            console.log(error);
            alert(error);
        } 
        setIsLoading(false);
    };
    

    const toggleTheme = () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
    };

    return {
        user,
        token,
        isLoading,
        retriveStorageToken,
        getAuthUser,
        signIn,
        signOut,
        signUp,
        // currentTheme,
        toggleTheme,
    }

};

