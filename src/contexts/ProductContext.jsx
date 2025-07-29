
import { createContext, useState } from "react"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 10, 2024",
      assigned: false,
    },
    {
      id: 2,
      name: "iPad Air",
      category: "Tablets",
      status: "In Stock",
      dateAdded: "Dec 7, 2024",
      assigned: false,
    },
    {
      id: 3,
      name: "Dell XPS 13",
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 9, 2024",
      assigned: false,
    },
    {
      id: 4,
      name: "Surface Pro 9",
      category: "Tablets",
      status: "Out of Stock",
      dateAdded: "Dec 6, 2024",
      assigned: false,
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      category: "Mobile",
      status: "Low Stock",
      dateAdded: "Dec 8, 2024",
      assigned: false,
    },
  ])

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: "Product added to inventory",
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
    },
    {
      id: 2,
      type: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
    },
    {
      id: 3,
      type: "Product assigned to Michael Brown",
      description: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
    },
    {
      id: 4,
      type: "Product sent for maintenance",
      description: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
    },
    {
      id: 5,
      type: "New user registered",
      description: "Amanda White - Staff Member",
      date: "Jan 14, 2024",
    },
  ])

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)))
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const assignedProducts = products.filter((product) => product.assigned)
  const unassignedProducts = products.filter((product) => !product.assigned)

  return (
    <ProductContext.Provider
      value={{
        products,
        recentActivity,
        addProduct,
        updateProduct,
        deleteProduct,
        totalProducts: products.length,
        assignedProducts: assignedProducts.length,
        unassignedProducts: unassignedProducts.length,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
