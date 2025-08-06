import { createContext, useState, useEffect } from "react"

const LoginUserContext = createContext()

export const LoginUserProvider = ({ children }) => {
  // Start with no logged-in user (null instead of default admin)
  const [loginUser, setLoginUser] = useState(null)

  // Check localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('loginUser')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setLoginUser(parsedUser)
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('loginUser')
      }
    }
  }, [])

  const updateLoginUser = (userData) => {
    if (userData === null) {
      // Handle logout case
      setLoginUser(null)
      try {
        localStorage.removeItem('loginUser')
      } catch (error) {
        console.error('Error removing user from localStorage:', error)
      }
    } else {
      // Handle login case - completely replace the user data
      setLoginUser(userData)
      try {
        localStorage.setItem('loginUser', JSON.stringify(userData))
      } catch (error) {
        console.error('Error storing user in localStorage:', error)
      }
    }
  }

  const logout = () => {
    setLoginUser(null)
    try {
      localStorage.removeItem('loginUser')
    } catch (error) {
      console.error('Error removing user from localStorage:', error)
    }
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