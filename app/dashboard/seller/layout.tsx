'use client'
import RoleProtected from '@/components/RoleProtected'
import Sidebar from '@/components/Sidebar'

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <RoleProtected allowedRole="buyer">
=======
    <RoleProtected allowedRole="seller">
>>>>>>> 48385a9 (Fix showConfirmation call to prevent build error)
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </RoleProtected>
  )
}
