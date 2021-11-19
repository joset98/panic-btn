export const initialLoginState = {
    isLoading: true,
    user: null,
    username: null,
    authToken: null,
};

const loginReducer = (prevState, action) => {
    
    switch (action.type) {

        case 'RETRIEVE_TOKEN':
            return {
                ...prevState,
                authToken: action.token,
                isLoading: false,
            };

        case 'ACTION_LOGIN':
            return {
                ...prevState,
                isLoading: true,
            };

        case 'LOGIN':
            console.log('login action')
            console.log(action)
            return {
                ...prevState,
                username: action.id,
                authToken: action.token,
                isLoading: false,
            };
        
        case 'LOGOUT':
            console.log('logout')
            return {
                ...prevState,
                username: null,
                user: null,
                authToken: null,
                isLoading: false,
            };
        
        case 'REGISTER':
            return {
                ...prevState,
                authToken: action.token,
                isLoading: false,
            };

        case 'ERROR_ACTION':
            return {
                ...prevState,
                isLoading: false,
            };
        
        case 'VERIFICATION':
            return {
                ...prevState,
                testify: action.test
            }
        case 'ACTION_AUTH':
            console.log(prevState)
            return {
                ...prevState,
            };
    }
};

export default loginReducer;