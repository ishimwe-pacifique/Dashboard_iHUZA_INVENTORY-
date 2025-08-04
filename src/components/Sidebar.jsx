
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
      <div 
        className="p-6 border-b flex-shrink-0"
        style={{ borderColor: 'var(--sidebar-border)' }}
      >
        <div className="flex items-center space-x-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ backgroundColor: 'var(--sidebar-primary)' }}
          >
            <Box 
              className="w-7 h-7" 
              style={{ color: 'var(--sidebar-primary-foreground)' }}
            />
          </div>
          <div className="min-w-0">
            <h1 
              className="text-xl font-bold truncate"
              style={{ color: 'var(--sidebar-foreground)' }}
            >
              iHUZA
            </h1>
            <p 
              className="text-sm font-medium tracking-wide"
              style={{ color: 'var(--muted-foreground)' }}
            >
              INVENTORY
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left group"
                  style={{
                    backgroundColor: isActive ? 'var(--sidebar-accent)' : 'transparent',
                    color: isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-foreground)',
                    ':hover': {
                      backgroundColor: 'var(--sidebar-accent)'
                    }
                  }}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Icon 
                      size={20} 
                      className="flex-shrink-0"
                      style={{
                        color: isActive ? 'var(--sidebar-primary)' : 'var(--muted-foreground)'
                      }}
                    />
                    <span 
                      className="font-medium truncate"
                      style={{
                        color: isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-foreground)'
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {item.count && (
                    <span 
                      className="text-sm font-semibold px-2.5 py-1 rounded-lg flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div 
        className="p-4 border-t flex-shrink-0"
        style={{ borderColor: 'var(--sidebar-border)' }}
      >
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group hover:opacity-80"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <LogOut size={20} className="flex-shrink-0" />
          <span className="font-medium truncate">Logout</span>
        </button>
        {loginUser && (
          <div 
            className="mt-3 px-4 py-3 rounded-xl"
            style={{ backgroundColor: 'var(--sidebar-accent)' }}
          >
            <p 
              className="text-xs font-medium truncate"
              style={{ color: 'var(--muted-foreground)' }}
            >
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
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow-lg"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)'
      }}
    >
      {isMobileMenuOpen ? (
        <X 
          className="w-6 h-6" 
          style={{ color: 'var(--muted-foreground)' }}
        />
      ) : (
        <Menu 
          className="w-6 h-6" 
          style={{ color: 'var(--muted-foreground)' }}
        />
      )}
    </button>
  )

  return (
    <>
      <MobileMenuButton />

      <div 
        className="hidden md:flex w-64 border-r h-screen flex-col fixed left-0 top-0 z-30"
        style={{
          backgroundColor: 'var(--sidebar)',
          borderColor: 'var(--sidebar-border)'
        }}
      >
        <SidebarContent />
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div 
            className="relative flex flex-col w-64 border-r h-full"
            style={{
              backgroundColor: 'var(--sidebar)',
              borderColor: 'var(--sidebar-border)'
            }}
          >
            <SidebarContent />
          </div>
        </div>
      )}

      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  )
}

export default Sidebar