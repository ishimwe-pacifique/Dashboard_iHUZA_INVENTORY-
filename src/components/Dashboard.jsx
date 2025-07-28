import { Users, Package, CheckCircle, AlertTriangle } from "lucide-react"
import { useUsers, useProducts } from "../hooks/useContexts"
import Header from "./Header"
import SystemOverview from "./SystemOverview"
import StatsCard from "./StatsCard"
import RecentProducts from "./RecentProducts"
import UserTable from "./UserTable"
import RecentActivity from "./RecentActivity"
import QuickActions from "./QuickActions"

const Dashboard = () => {
  const { totalUsers } = useUsers()
  const { totalProducts, assignedProducts, unassignedProducts } = useProducts()

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <Header />

      <div className="p-4 md:p-6 space-y-6 md:space-y-8">
        <SystemOverview />

        {/* Stats Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatsCard title="Total Users" value={totalUsers} icon={Users} color="blue" />
          <StatsCard title="Total Products" value={totalProducts} icon={Package} color="green" />
          <StatsCard title="Assigned Products" value={assignedProducts} icon={CheckCircle} color="green" />
          <StatsCard title="Unassigned Products" value={unassignedProducts} icon={AlertTriangle} color="yellow" />
        </div>

        <RecentProducts />

        {/* Two Column Layout - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          <div className="xl:col-span-2 order-2 xl:order-1">
            <RecentActivity />
          </div>
          <div className="order-1 xl:order-2">
            <QuickActions />
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden">
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
