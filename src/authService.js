const TEST_SERVER = 'https://test-server-panicbtn.herokuapp.com';

const login = async (user) => {
    try {
        const response = await fetch(
            `${TEST_SERVER}/api/v1/users/login`,
            {
                hola: `${TEST_SERVER}`,
                method:'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }	
        );
        if (response.status === 500){
            alert('Ha ocurrido un error en el servidor');
            return ;
        }
        console.log('on auth service')
        console.log('response')
        console.log(response.headers)
        const userToken = response.headers.get('auth-token');
    
        return userToken;
        
    } catch (error) {
        console.log(`error login authservice${error}`)
        return error;
    }
} 

const signup = async (newUser) => {
    console.log(JSON.stringify(newUser));
    try {
        const response = await fetch(
            `${TEST_SERVER}/api/v1/users/signup`,
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
    
        return userToken    
        
    } catch (error) {
        console.log(`login error ${error}`)        
    }
} 

const getUser = async (authToken) => {
    console.log('getuser auth service')
    const response = await fetch(
        `${TEST_SERVER}/api/v1/users/me`,
        {
            method:'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken,
            },
        }	
    );
    console.log('getuser with response')
    console.log(response)
    
    if (response.status === 500){
        alert('Ha ocurrido un error en el servidor');
        return ;
    }
    const { data } = await response.json()
    console.log('response authService')
    console.log(data)

    return data;
} 

export { login, signup, getUser };
