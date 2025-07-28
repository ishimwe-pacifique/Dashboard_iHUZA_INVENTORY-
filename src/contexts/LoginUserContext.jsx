"use client"

import { createContext, useState } from "react"

const LoginUserContext = createContext()

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    username: "Admin",
    email: "admin@ihuza.com",
    role: "Admin",
  })

  const updateLoginUser = (userData) => {
    setLoginUser((prev) => ({ ...prev, ...userData }))
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
