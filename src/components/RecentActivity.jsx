import { Package, UserPlus, Wrench, CheckCircle } from "lucide-react"
import { useProducts } from "../hooks/useContexts"

const RecentActivity = () => {
  const { recentActivity } = useProducts()

  const getActivityIcon = (type) => {
    if (type.includes("Product added")) return Package
    if (type.includes("assigned")) return CheckCircle
    if (type.includes("maintenance")) return Wrench
    if (type.includes("user registered")) return UserPlus
    return Package
  }

  const getActivityColor = (type) => {
    if (type.includes("Product added")) return "text-blue-600 dark:text-blue-400"
    if (type.includes("assigned")) return "text-green-600 dark:text-green-400"
    if (type.includes("maintenance")) return "text-yellow-600 dark:text-yellow-400"
    if (type.includes("user registered")) return "text-purple-600 dark:text-purple-400"
    return "text-gray-600 dark:text-gray-400"
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
        <div className="flex justify-between items-center">
          <h3 
            className="text-lg font-semibold"
            style={{ color: 'var(--card-foreground)' }}
          >
            Recent Activity
          </h3>
          <button 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
            style={{ color: 'var(--primary)' }}
          >
            View all
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = getActivityIcon(activity.type)
            const colorClass = getActivityColor(activity.type)

            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div 
                  className={`p-2 rounded-lg ${colorClass}`}
                  style={{ backgroundColor: 'var(--muted)' }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--card-foreground)' }}
                  >
                    {activity.type}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {activity.description}
                  </p>
                  <p 
                    className="text-xs mt-1"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {activity.date}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity