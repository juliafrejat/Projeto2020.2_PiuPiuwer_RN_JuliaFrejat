import api from './api';

export const logInRequest = (username: string, password: string) => {
    return(api.post('/login/', {username: username, password: password}))
}