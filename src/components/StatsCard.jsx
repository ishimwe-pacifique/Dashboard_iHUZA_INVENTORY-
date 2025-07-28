const StatsCard = ({ title, value, icon: Icon, color = "blue", description }) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800",
    orange:
      "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-800",
    yellow:
      "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800",
  }

  return (
    <div 
      className="p-4 md:p-6 rounded-xl border transition-all duration-200 hover:shadow-md dark:hover:shadow-lg"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className={`p-2 md:p-3 rounded-lg border transition-colors duration-200 ${colorClasses[color]}`}>
          <Icon size={20} className="md:w-6 md:h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p 
            className="text-2xl md:text-3xl font-bold truncate"
            style={{ color: 'var(--card-foreground)' }}
          >
            {value}
          </p>
          <p 
            className="text-xs md:text-sm mt-1 truncate"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {title}
          </p>
        </div>
      </div>
      {description && (
        <p 
          className="text-sm mt-4 leading-relaxed"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default StatsCard