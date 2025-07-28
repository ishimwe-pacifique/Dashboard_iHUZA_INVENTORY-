"use client"

import { useState } from "react"
import { UserProvider } from "./contexts/UserContext"
import { ProductProvider } from "./contexts/ProductContext"
import { LoginUserProvider } from "./contexts/LoginUserContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import UserTable from "./components/UserTable"
import Header from "./components/Header"

function App() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "users":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <UserTable />
            </div>
          </div>
        )
      case "products":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products Page</h1>
            </div>
          </div>
        )
      case "assignments":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Assignments Page</h1>
            </div>
          </div>
        )
      case "categories":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Categories Page</h1>
            </div>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
          <ProductProvider>
            <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 font-['Montserrat'] transition-colors duration-200">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="flex-1 flex flex-col min-w-0">{renderContent()}</div>
            </div>
          </ProductProvider>
        </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
  )
}

export default App
