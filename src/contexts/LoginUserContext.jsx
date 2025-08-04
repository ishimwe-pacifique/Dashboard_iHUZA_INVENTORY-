import { createContext, useState } from "react"

const LoginUserContext = createContext()

export const LoginUserProvider = ({ children }) => {
  // Start with no logged-in user (null instead of default admin)
  const [loginUser, setLoginUser] = useState(null)

  const updateLoginUser = (userData) => {
    if (userData === null) {
      // Handle logout case
      setLoginUser(null)
    } else {
      // Handle login case - completely replace the user data
      setLoginUser(userData)
    }
  }

  const logout = () => {
    setLoginUser(null)
  }

  return (
    <LoginUserContext.Provider
      value={{
        loginUser,
        updateLoginUser,
        logout,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  )
}

export default LoginUserContext