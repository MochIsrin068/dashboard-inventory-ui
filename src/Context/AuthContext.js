import {useState, createContext} from 'react'

export const AuthContextInitialization = createContext({
    isLoggedIn : false,
    setIsLoggedIn : null
})

const AuthContext = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <AuthContextInitialization.Provider
            value={
                {
                    isLoggedIn : isLoggedIn,
                    setIsLoggedIn : setIsLoggedIn
                }
            }
        >
            {children}
        </AuthContextInitialization.Provider>
    )
}

export default AuthContext