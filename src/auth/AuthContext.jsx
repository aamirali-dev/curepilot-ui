import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { apiLogin, apiLogout } from "../api/AuthApi";

export const AuthContext = createContext()
export const useAuth = ()=> useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(()=> localStorage.getItem('accesss') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [name, setName] = useState(null);

    useEffect(()=>{
        if(localStorage.getItem('access')) {
          setAuthenticated(true)
        }
        else setAuthenticated(false)
      },[])

      const login = async (username, password) => {
        console.log('inside context auth')
        return apiLogin(username, password)
          .then((response) => {
            console.log(response)
            console.log(response.status)
            if(response.status==200){
              localStorage.setItem("access", response.data.access)
              localStorage.setItem("refresh", response.data.refresh)
              setAuthenticated(true)
              return true
            }
          })
          .catch((error) => {
            console.log(error)
            setAuthenticated(false)
            return false
          })
        }


      const logout = async () => {

        apiLogout(localStorage.getItem('refresh'))
          .then((response) => {
            if(response.status == 200){
              setAuthenticated(false)
              localStorage.removeItem("access")
              localStorage.removeItem("refresh")
            }
          })
      }

      return (
        <AuthContext.Provider value = { {username, isAuthenticated, login, logout, token} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider