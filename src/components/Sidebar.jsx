"use client"

import {
  Home,
  Users,
  Package,
  ClipboardList,
  Layers,
  LogOut,
  Box,
  Menu,
  X,
} from "lucide-react"
import { useLoginUser } from "../hooks/useContexts"
import { useState, useEffect } from "react"

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { loginUser, logout } = useLoginUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
      <div className="p-6 border-b border-border flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Box className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground truncate">iHUZA</h1>
            <p className="text-sm text-muted-foreground">INVENTORY</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-left group
                    ${
                      isActive
                        ? "bg-muted text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="font-medium truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-sm font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full flex-shrink-0">
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
      <div className="p-4 border-t border-border flex-shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-destructive rounded-lg transition-all duration-200 text-left group"
        >
          <LogOut size={20} className="flex-shrink-0" />
          <span className="font-medium truncate">Logout</span>
        </button>
        {loginUser && (
          <div className="mt-3 px-3 py-2 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground truncate">
              {loginUser.email}
            </p>
          </div>
        )}
      </div>
    </>
  )

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-lg shadow-lg"
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6 text-muted-foreground" />
      ) : (
        <Menu className="w-6 h-6 text-muted-foreground" />
      )}
    </button>
  )

  return (
    <>
      <MobileMenuButton />

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-background border-r border-border h-screen flex-col fixed left-0 top-0 z-30">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Sidebar Panel */}
          <div className="relative flex flex-col w-64 bg-background border-r border-border h-full">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  )
}

export default Sidebar
