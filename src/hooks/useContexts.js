"use client"

import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import ProductContext from "../contexts/ProductContext"
import LoginUserContext from "../contexts/LoginUserContext"
import ThemeContext from "../contexts/ThemeContext"

export const useUsers = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider")
  }
  return context
}

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}

export const useLoginUser = () => {
  const context = useContext(LoginUserContext)
  if (!context) {
    throw new Error("useLoginUser must be used within a LoginUserProvider")
  }
  return context
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
