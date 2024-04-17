import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
        <div className="root-container">
            <div className="wrapper">
            <Sidebar />
            </div>
        </div>

        {children}
    </main>
  )
}

export default Layout
