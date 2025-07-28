"use client"
import { Box, CheckCircle } from "lucide-react"

const SystemOverview = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 rounded-xl text-white mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <Box className="w-8 h-8" />
        <h2 className="text-2xl font-bold">iHUZA INVENTORY - System Overview</h2>
      </div>
      <p className="text-blue-100 mb-6">Monitor your iHUZA inventory and product assignments in real-time.</p>
      <div className="flex items-center space-x-2">
        <CheckCircle className="w-5 h-5 text-green-300" />
        <span className="text-green-100 font-medium">All Systems Operational</span>
      </div>
    </div>
  )
}

export default SystemOverview
