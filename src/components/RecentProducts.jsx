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
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Recent Added Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md dark:hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate pr-2">
                {product.name}
              </h4>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border flex-shrink-0 ${getStatusColor(product.status)}`}
              >
                {product.status}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 truncate">{product.category}</p>
            <p className="text-gray-500 dark:text-gray-500 text-xs md:text-sm">{product.dateAdded}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProducts
