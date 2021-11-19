import React, { useReducer } from 'react';

import { AuthContext } from '../contexts/authContext';
import loginReducer, { initialLoginState } from '../reducers/authReducer';
import { useProviderAuth } from '../hooks/useProviderAuth';

const AuthProvider = ({ children }) => {
	// const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
    const auth = useProviderAuth();
    // console.log('authprovider')
    // console.log(auth)
    
    // <AuthContext.Provider value={{authState: loginState, authDispatcher: dispatch}}>
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;