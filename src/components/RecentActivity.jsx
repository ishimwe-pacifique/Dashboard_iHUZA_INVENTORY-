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
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
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
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700 ${colorClass}`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.date}</p>
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
