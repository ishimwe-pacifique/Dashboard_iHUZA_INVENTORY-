"use client"
import { Moon, Sun, Settings, Bell, User } from "lucide-react"
import { useLoginUser, useTheme } from "../hooks/useContexts"

const Header = () => {
  const { loginUser } = useLoginUser()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">Dashboard</h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 truncate">
            Welcome Back, {loginUser?.username}
          </p>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Settings */}
          <button
            className="hidden sm:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Notifications */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>

          {/* User Profile */}
          <div className="hidden sm:flex items-center space-x-3 pl-2 border-l border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-32">{loginUser?.email}</span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Mobile User Avatar */}
          <div className="sm:hidden w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
