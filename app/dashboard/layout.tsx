import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='w-full flex items-start bg-dashboardBg ' >

            <div className="sticky top-0 flex flex-1 h-full max-w-[260px]">
                <Sidebar />
            </div>
            <div className="flex flex-[4.5] h-full flex-col">

                {/* NAVBAR COMPONENT */}
                <div className='w-full bg-white' >
                    <Navbar />
                </div>

                {/* EACH PAGE ROUTED TO FROM THE FILE STRUCTURE */}
                <div className='h-full w-full scroll-2' >
                    {children}
                </div>
            </div>

        </div>
    )
}

export default layout;