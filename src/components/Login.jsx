import { useState, useEffect } from "react"
import { useContexts } from "../hooks/useContexts"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function Login() {
  const { users, updateLoginUser } = useContexts()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Check for existing user in localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('loginUser')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        updateLoginUser(parsedUser)
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('loginUser')
      }
    }
  }, [updateLoginUser])

  const handleLogin = (e) => {
    e.preventDefault()
    const matchedUser = users.find((user) => user.email === email)
    if (matchedUser) {
      const userData = {
        username: matchedUser.name,
        email: matchedUser.email,
        role: matchedUser.role,
      }
      
      // Update context
      updateLoginUser(userData)
      
      // Store in localStorage
      try {
        localStorage.setItem('loginUser', JSON.stringify(userData))
      } catch (error) {
        console.error('Error storing user in localStorage:', error)
      }
    } else {
      setError("Invalid Credentials")
    }
  }

  // Function to handle logout (you can export this or call it from parent component)
  // const handleLogout = () => {
  //   try {
  //     localStorage.removeItem('loginUser')
  //     updateLoginUser(null) // or however your context handles logout
  //   } catch (error) {
  //     console.error('Error removing user from localStorage:', error)
  //   }
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4 shadow-lg">
            <span className="text-white font-bold text-xl">iH</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your iHUZA account</p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 space-y-6"
        >
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>

          {/* Additional Links */}
          <div className="text-center space-y-4">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              Forgot your password?
            </a>
            <div className="text-sm text-gray-600">
              {"Don't have an account? "}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Sign up
              </a>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">© 2024 iHUZA. All rights reserved.</div>
      </div>
    </div>
  )
}