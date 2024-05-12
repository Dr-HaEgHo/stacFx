'use client'
import OnboardingPanel from '@/components/OnboardingPanel';
import React from 'react'

const page = () => {

    const ended = () => {
        alert('ended the video')
    }

    return (
        <div className='w-full h-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] xl:max-w-[1200px] ">
                    
                    {/* TOP WITH HEADER DESCRIPTIONS */}
                    <div className='flex flex-col items-start gap-[8px] 2xl:gap-3' >
                        <h3 className='text-lg 2xl:text-xl text-headDesc ' >Onboarding</h3>
                        <p className='text-[13px] text-greytxt ' >Watch welcome video to complete onboarding process</p>
                    </div>
                
                    
                    {/* VIDEO AND COMPONENT */}
                    <div className='flex mt-[30px] 2xl:mt-[36px] items-stretch gap-[18px] 2xl:gap-[24px]' >
                        <div className='flex flex-[1]' >
                            <OnboardingPanel/>
                        </div>

                        <div className='flex flex-[2.8] items-center justify-center rounded-2xl overflow-hidden'>
                            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoPlay onEnded={ended} className='w-full h-full object-cover' />

                        </div>
                    </div>
                    
                
                
                
                </div>
            </div>
        </div>
    )
}

export default page;