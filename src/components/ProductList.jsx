import { Package } from "lucide-react"

const ProductList = ({ title, products, showStatus = true }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-600 bg-green-100"
      case "Out of Stock":
        return "text-red-600 bg-red-100"
      case "Low Stock":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>

              <div className="text-right space-y-1">
                {showStatus && (
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}
                  >
                    {product.status}
                  </span>
                )}
                <p className="text-sm text-gray-500">{product.dateAdded}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
