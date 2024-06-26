import { CardData } from '@/types'
import Image from 'next/image'
import React, { FC } from 'react'

const ProgressCard: FC<CardData> = ({ data, action })=> {
  return (
      <div onClick={() => action()} className='w-full aspect-[1.4] rounded-xl relative flex flex-col justify-between overflow-hidden shadow' >


          {/* IMAGE IN THE BACKGROUND */}
          <div className='w-full h-full absolute left-1/2 transform -translate-x-1/2 z-0' >
              <Image 
                  src={require('../../assets/images/thumbnail.png')}
                  alt='stacFx.com'
                  className='w-full'
              />
          </div>

          {/* BADGE AND MORE */}
          {/* <div className='w-full flex items-center justify-between p-[10px] 2xl:p-3 z-10' >
              <button className='bg-appOrange rounded py-[5px] px-[10px] text-[13px] 2xl:text-[15px] text-white' >New</button>

              <button className='bg-primary2 flex items-center justify-center w-5 h-5 rounded-full' >
                  <Image 
                      src={require('../../assets/icons/moreVert.png')}
                      alt='stacFx.com'
                      className='w-[18px]'
                  />
              </button>
          </div> */}


          {/* PLAY BADGE */}
          <div className='w-full h-full z-20 flex items-center justify-center'>
              <div className='transition duration-300 cursor-pointer w-[58px] h-[58px] 2xl:w-[66px] 2xl:h-[66px] rounded-full bg-[rgba(0,0,0,.6)] hover:bg-[rgba(0,0,0,.5)] active:bg-[rgba(0,0,0,.6)] flex items-center justify-center' >
                  <Image 
                      src={require('../../assets/icons/play.png')}
                      alt='stacfx.com'
                      className='w-[28px] 2xl:w-[34px]'
                  />
              </div>
          </div>


          {/* WHITE AREA WITH CONTENT */}
          <div className='w-full h-[50%] bg-white z-10 pt-[8px] px-[16px] 2xl:py-[20px] flex flex-col gap-4' >

              {/* TITLE AND NAME OF INSTRUCTOR */}
              <div className='' >
                  <h3 className='text-[14px] 2xl:text-[15px] text-black' >{data?.title}</h3>
                  <p className='text-greytxt text-[10px] 2xl:text-xs font-[100]' >{data?.instructor}</p>
              </div>


              {/* ONBOARDING PROGRESS */}
              <div className='w-full ' >

                  {/* PROGRESS BAR */}
                  <div className='w-full h-[8px] bg-progressTrack2 rounded-full mb-2' >
                      <div className={`w-[${Math.floor(data?.completed / data?.total * 100)}%] bg-progress2 h-full rounded-full`} />
                  </div>


                  <p className='text-black text-xs font-normal' >{Math.floor(data?.completed / data?.total * 100)}% Complete <span className='text-greytxt text-xs font-normal' >( {data?.completed} of {data?.total} complete  )</span></p>
              </div>

          </div>
      </div>
  )
}

export default ProgressCard