import { useEffect, useReducer } from "react"
import loginReducer from "../reducers/authReducer";

export default () => {

	const [authState, dispatch] = useReducer(loginReducer);

    useEffect( () =>{

        async function getUserAuth() {
            
            console.log('berfore getme')
            console.log(authState)
            if( !authState?.authToken )
                return ;
            console.log('after getme')
        
            const response = await fetch(
                'https://test-server-panicbtn.herokuapp.com/api/v1/users/me',
                {
                    method:'GET',
                    mode: 'cors',
                    headers: {
                        'auth-token': authState?.authToken,
                        'Content-Type': 'application/json'
                    },
                }	
            );
            console.log('response useauth')
            console.log(response)
            if (response.status === 500){
                alert('Ha ocurrido un error en el servidor');
                return ;
            }
        };
        getUserAuth();

    }, [authState?.user, authState?.authToken]);

    console.log('use auth')
    return {
        authUser: authState?.user,
        authDispatcher: dispatch
    };
}