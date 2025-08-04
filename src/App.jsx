"use client"
import { useState } from "react"
import { UserProvider } from "./contexts/UserContext"
import { ProductProvider } from "./contexts/ProductContext"
import { LoginUserProvider } from "./contexts/LoginUserContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import { useContexts } from "./hooks/useContexts"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import UserTable from "./components/UserTable"
import RecentProducts from "./components/RecentProducts"
import Header from "./components/Header"
import Login from "./components/Login"

// Create a separate component that uses the context
function AuthenticatedApp() {
  const { loginUser } = useContexts()
  const [activeTab, setActiveTab] = useState("dashboard")

  // If no user is logged in, show login page
  if (!loginUser || !loginUser.email) {
    return <Login />
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "users":
        return (
          <div className="flex-1 bg-background min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <UserTable />
            </div>
          </div>
        )
      case "products":
        return (
          <div className="flex-1 bg-background min-h-screen transition-colors duration-200">
            <Header />
            <div className="p-4 md:p-6">
              <RecentProducts />
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
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 font-['Montserrat'] transition-colors duration-200">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">{renderContent()}</div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
          <ProductProvider>
            <AuthenticatedApp />
          </ProductProvider>
        </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
  )
}

export default App