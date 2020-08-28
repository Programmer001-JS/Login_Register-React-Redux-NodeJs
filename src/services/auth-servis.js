import axios from "axios"

class AuthService {
    static register(body) {
        return axios.post('/register', body)

    }
    static login(body) {
        return axios.post('/login', body)
    }
    static logout(history) {
        localStorage.removeItem('app_user_data')
        history.push('/')
    }
    static storeUserData(userData) {
        localStorage.setItem('app_user_data', JSON.stringify(userData))
    }
    static getUserData() {
        let userData = localStorage.getItem('app_user_data')
        return userData ? JSON.parse(userData) : null
    }

}

export default AuthService;
