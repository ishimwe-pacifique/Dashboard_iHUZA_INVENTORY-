import { useProducts } from "../hooks/useContexts"

const RecentProducts = () => {
  const { products } = useProducts()

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
      case "Out of Stock":
        return "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
      case "Low Stock":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h3 
        className="text-lg md:text-xl font-semibold"
        style={{ color: 'var(--foreground)' }}
      >
        Recent Added Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products.slice(0, 7).map((product) => (
          <div
            key={product.id}
            className="p-4 md:p-6 rounded-xl border transition-all duration-200 hover:shadow-md dark:hover:shadow-lg"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h4 
                className="font-semibold text-sm md:text-base truncate pr-2"
                style={{ color: 'var(--card-foreground)' }}
              >
                {product.name}
              </h4>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border flex-shrink-0 ${getStatusColor(product.status)}`}
              >
                {product.status}
              </span>
            </div>
            <p 
              className="text-sm mb-2 truncate"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {product.category}
            </p>
            <p 
              className="text-xs md:text-sm"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {product.dateAdded}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProducts