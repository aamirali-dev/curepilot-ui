import { apiClient } from "./ApiClient"

export function apiLogin(username, password){
    console.log('api login')
    return apiClient.post('/auth/jwt/create/', {username, password})
}

export function apiLogout(refresh_token){
    return apiClient.post('/auth/logout/', {'refresh': refresh_token})
}