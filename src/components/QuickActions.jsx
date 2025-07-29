import { Users, Package, ClipboardList } from "lucide-react"

const QuickActions = () => {
  const actions = [
    {
      title: "View Users",
      description: "View all registered users",
      icon: Users,
      color: "blue",
    },
    {
      title: "View Products",
      description: "View all registered products",
      icon: Package,
      color: "green",
    },
    {
      title: "View Assignments",
      description: "View all product assignments",
      icon: ClipboardList,
      color: "purple",
    },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-600 dark:text-blue-400"
      case "green":
        return "text-green-600 dark:text-green-400"
      case "purple":
        return "text-purple-600 dark:text-purple-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div 
      className="rounded-xl border"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div 
        className="p-6 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <h3 
          className="text-lg font-semibold"
          style={{ color: 'var(--card-foreground)' }}
        >
          Quick Actions
        </h3>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon
            const colorClass = getColorClasses(action.color)

            return (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 rounded-lg"
                style={{ backgroundColor: 'var(--muted)' }}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 ${colorClass}`} />
                  <div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: 'var(--card-foreground)' }}
                    >
                      {action.title}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {action.description}
                    </p>
                  </div>
                </div>
                <button 
                  className="hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  Go
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuickActions