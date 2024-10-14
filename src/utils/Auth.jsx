import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [userState, setUserState] = useState(null)

    const login = (user) => {
        setUserState(user);
    }

    const logout = () => {
        setUserState(null)
    }

    return(
        <AuthContext.Provider value={{userState, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}