"use client"
import { Home, Users, Package, ClipboardList, Layers, LogOut, Box, Menu, X } from "lucide-react"
import { useLoginUser } from "../hooks/useContexts"
import { useState, useEffect } from "react"

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { loginUser, logout } = useLoginUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close mobile menu when tab changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [activeTab])

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, count: null },
    { id: "users", label: "Users", icon: Users, count: 116 },
    { id: "products", label: "Products", icon: Package, count: 100 },
    { id: "assignments", label: "Assignments", icon: ClipboardList, count: 10 },
    { id: "categories", label: "Categories", icon: Layers, count: null },
  ]

  const SidebarContent = () => (
    <>
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Box className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white truncate">iHUZA</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">INVENTORY</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-left group ${
                    activeTab === item.id
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="font-medium truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full flex-shrink-0">
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all duration-200 text-left group"
        >
          <LogOut size={20} className="flex-shrink-0" />
          <span className="font-medium truncate">Logout</span>
        </button>
        {loginUser && (
          <div className="mt-3 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{loginUser.email}</p>
          </div>
        )}
      </div>
    </>
  )

  // Mobile Menu Button
  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      ) : (
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  )

  return (
    <>
      <MobileMenuButton />

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen flex-col fixed left-0 top-0 z-30">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Spacer for desktop */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  )
}

export default Sidebar
