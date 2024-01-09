import { apiClient } from "./ApiClient"


export const completeChat = (prompt) => {
    
    return apiClient.post('/v1/chat/completion', {prompt})
}