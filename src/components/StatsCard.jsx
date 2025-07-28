const StatsCard = ({ title, value, icon: Icon, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800",
    orange:
      "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-800",
    yellow:
      "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800",
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md dark:hover:shadow-lg">
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className={`p-2 md:p-3 rounded-lg border transition-colors duration-200 ${colorClasses[color]}`}>
          <Icon size={20} className="md:w-6 md:h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white truncate">{value}</p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
