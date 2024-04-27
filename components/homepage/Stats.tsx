import React from 'react'

const Stats = () => {
    return (
        <div className='w-full py-10' >
                <div className='w-full bg-primary2 rounded-2xl flex items-center py-20 px-24 xl:px-[120px] justify-between'>
                    <div className='flex flex-col items-center justify-center' >
                        <h3 className='text-[52px] leading-[62px] text-white font-[400]'>10K+</h3>
                        <p className='text-primarytxt text-sm font-[400] tracking-[4px] leading-[17.8px]'>REGISTERED</p>
                    </div>
                    <div className='flex flex-col items-center justify-center' >
                        <h3 className='text-[52px] leading-[62px] text-white font-[400]'>9K+</h3>
                        <p className='text-primarytxt text-sm font-[400] tracking-[4px] leading-[17.8px]'>SUCCESSFUL TRADERS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center' >
                        <h3 className='text-[52px] leading-[62px] text-white font-[400]'>+5Yrs</h3>
                        <p className='text-primarytxt text-sm font-[400] tracking-[4px] leading-[17.8px]'>EXPERIENCE</p>
                    </div>
                </div>
        </div>
    )
}

export default Stats