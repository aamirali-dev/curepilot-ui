import axios from 'axios'

export const apiClient = axios.create({
    baseURL: (import.meta.env.VITE_API_SERVER_URL)
})

apiClient.interceptors.request.use((config) => {
    console.log(config)
    config.headers.Authorization = `JWT ${localStorage.getItem('access')}`
    return config
})


apiClient.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('access');
        if(accessToken){
            if(isTokenExpired(accessToken)){
                accessToken = refreshToken()
            }
            config.headers.Authorization = `JWT ${accessToken}`
            return config
        }else{

        }}
)

const refreshToken = async () => {
    try {
        const response = await apiClient.post('/auth/jwt/refresh')
        const newAccessToken = response.data.access
        localStorage.setItem('access', newAccessToken)
        return newAccessToken;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        throw error;
    }
}

const isTokenExpired = (token) => {
    if (!token) {
        return true;
    }
    const decodedToken = parseJwt(token);
    return !(decodedToken && decodedToken.exp && decodedToken.exp * 1000 > Date.now());
}

const parseJwt = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

