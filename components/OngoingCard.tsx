import { CardData } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react'

const OngoingCard:FC<CardData> = ({ data, action }) => {
    return (
      <>
        {
            data !== null ? (  <div onClick={action} className='w-full aspect-[1.4] rounded-xl relative flex flex-col justify-between overflow-hidden shadow' >

                {/* IMAGE IN THE BACKGROUND */}
                <div className='w-full h-[50%] absolute left-1/2 top-0 transform -translate-x-1/2 z-0' >
                </div>
    
                {/* IMAGE */}
                <div className='w-full h-[50%]  bg-orange-300 flex items-center justify-between z-10' >
                    <Image 
                        src={data.course?.cover_image as unknown as string}
                        width={1024}
                        height={1024}
                        alt='stacFx.com'
                        className='w-full h-full object-cover'
                    />
                </div>
    
                {/* WHITE AREA WITH CONTENT */}
                <div className='w-full h-[50%] bg-white z-10 pt-[8px] pb-[10px] px-[16px] 2xl:py-[20px] flex flex-col justify-between gap-3' >
    
                    {/* TITLE AND NAME OF INSTRUCTOR */}
                    <div className=''>
                    <h3 className='text-[14px] 2xl:text-base text-black' >{data?.course?.title}</h3>
                        <p className='text-greytxt text-[10px] 2xl:text-sm font-[100]' >{data?.course?.instructor?.first_name} {data?.course?.instructor?.last_name}</p>
                    </div>
    
                    {/* ONBOARDING PROGRESS */}
                    <div className='w-full'>
    
                        {/* PROGRESS BAR */}
                        <div className='w-full h-[8px] bg-progressTrack2 rounded-full mb-2' >
                            <div style={{
                                width:`${Math.floor(data?.lessons_completion_percentage)}%`
                            }} className={`bg-progress2 h-full rounded-full`} />
                        </div>
    
                        <p className='text-black text-xs font-normal' >{Math.floor(data !== null ? data?.lessons_completion_percentage : 0 )}% Complete <span className='text-greytxt text-xs font-normal' >( { data?.completed_lessons_count } of { data?.total_lessons_count } complete  )</span></p>
                    </div>
    
                </div>
            </div>) : (<p>Something went wrong</p>)
        }
      </>
    )
}

export default OngoingCard;