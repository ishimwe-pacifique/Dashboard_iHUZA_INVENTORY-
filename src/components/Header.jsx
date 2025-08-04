import { Moon, Sun, Settings, Bell, User } from "lucide-react"
import { useLoginUser, useTheme } from "../hooks/useContexts"

const Header = () => {
  const { loginUser } = useLoginUser()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div 
      className="border-b px-4 md:px-6 py-4 transition-colors duration-200"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h1 
            className="text-2xl md:text-3xl font-bold truncate"
            style={{ color: 'var(--foreground)' }}
          >
            Dashboard
          </h1>
          <p 
            className="text-sm md:text-base truncate mt-1"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Welcome Back, {loginUser?.username || 'Admin'}
          </p>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
            style={{
              ':hover': { backgroundColor: 'var(--muted)' },
              '--tw-ring-color': 'var(--ring)'
            }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun 
                className="w-5 h-5" 
                style={{ color: 'var(--muted-foreground)' }}
              />
            ) : (
              <Moon 
                className="w-5 h-5" 
                style={{ color: 'var(--muted-foreground)' }}
              />
            )}
          </button>
          <button
            className="hidden sm:block p-2 md:p-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
            style={{
              ':hover': { backgroundColor: 'var(--muted)' },
              '--tw-ring-color': 'var(--ring)'
            }}
            aria-label="Settings"
          >
            <Settings 
              className="w-5 h-5" 
              style={{ color: 'var(--muted-foreground)' }}
            />
          </button>
          <button
            className="p-2 md:p-2.5 rounded-lg transition-all duration-200 relative focus:outline-none focus:ring-2"
            style={{
              ':hover': { backgroundColor: 'var(--muted)' },
              '--tw-ring-color': 'var(--ring)'
            }}
            aria-label="Notifications"
          >
            <Bell 
              className="w-5 h-5" 
              style={{ color: 'var(--muted-foreground)' }}
            />
            <div 
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--destructive)' }}
            ></div>
          </button>
          <div 
            className="hidden sm:flex items-center space-x-3 pl-3 ml-2 border-l"
            style={{ borderColor: 'var(--border)' }}
          >
            <span 
              className="text-sm truncate max-w-32 font-medium"
              style={{ color: 'var(--foreground)' }}
            >
              {loginUser?.email || 'Admin@ihuza.com'}
            </span>
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <User 
                className="w-4 h-4" 
                style={{ color: 'var(--primary-foreground)' }}
              />
            </div>
          </div>
          <div 
            className="sm:hidden w-8 h-8 rounded-full flex items-center justify-center ml-2"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <User 
              className="w-4 h-4" 
              style={{ color: 'var(--primary-foreground)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header