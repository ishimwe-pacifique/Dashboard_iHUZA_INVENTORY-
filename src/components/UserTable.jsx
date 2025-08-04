import { User } from "lucide-react"
import { useUsers } from "../hooks/useContexts"

const UserTable = () => {
  const { users, deleteUser } = useUsers()

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
      : "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800"
      case "Manager":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800"
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
    }
  }

  return (
    <div 
      className="rounded-xl border transition-colors duration-200"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div 
        className="p-4 md:p-6 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 
            className="text-lg font-semibold"
            style={{ color: 'var(--card-foreground)' }}
          >
            Users
          </h3>
          <button 
            className="hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 self-start sm:self-auto"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)'
            }}
          >
            Add User
          </button>
        </div>
      </div>

   
      <div className="block md:hidden">
        <div className="p-4 space-y-4">
          {users.map((user) => (
            <div 
              key={user.id} 
              className="p-4 rounded-lg space-y-3"
              style={{ backgroundColor: 'var(--muted)' }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <User 
                    className="w-5 h-5"
                    style={{ color: 'var(--muted-foreground)' }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p 
                    className="text-sm font-medium truncate"
                    style={{ color: 'var(--card-foreground)' }}
                  >
                    {user.name}
                  </p>
                  <p 
                    className="text-xs truncate"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getRoleColor(user.role)}`}>
                  {user.role}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(user.status)}`}>
                  {user.status}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span 
                  className="text-xs"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {user.lastLogin}
                </span>
                <div className="flex space-x-2">
                  <button 
                    className="text-xs font-medium hover:opacity-80"
                    style={{ color: 'var(--primary)' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xs font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead style={{ backgroundColor: 'var(--muted)' }}>
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                USER
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                ROLE
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                STATUS
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                LAST LOGIN
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody 
            className="divide-y transition-colors duration-150"
            style={{
              backgroundColor: 'var(--card)',
              '--tw-divide-opacity': '1',
              borderColor: 'var(--border)'
            }}
          >
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="hover:opacity-75 transition-colors duration-150"
                style={{ 
                  ':hover': { backgroundColor: 'var(--muted)' }
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <User 
                        className="w-4 h-4"
                        style={{ color: 'var(--muted-foreground)' }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p 
                        className="text-sm font-medium truncate"
                        style={{ color: 'var(--card-foreground)' }}
                      >
                        {user.name}
                      </p>
                      <p 
                        className="text-sm truncate"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td 
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button 
                      className="text-sm font-medium transition-colors duration-150 hover:opacity-80"
                      style={{ color: 'var(--primary)' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable