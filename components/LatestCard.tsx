import Image from 'next/image';
import React from 'react'

const LatestCard = ({ data }: {data:any}) => {
  return (
      <div className='w-full aspect-[1.4] rounded-xl 2xl:rounded-3xl relative flex flex-col justify-between overflow-hidden shadow' >
          

          {/* IMAGE IN THE BACKGROUND */}
          <div className='w-full h-full absolute left-1/2 transform -translate-x-1/2 z-0' >
              <Image
                  src={require('../assets/images/thumbnail.png')}
                  alt='stacFx.com'
                  className='w-full'
              />
          </div>

          {/* BADGE AND MORE */}
          <div className='w-full flex items-center justify-between p-[10px] 2xl:p-3 z-10' >
              <button className='bg-appOrange rounded py-[5px] px-[10px] text-[13px] 2xl:text-[15px] text-white' >New</button>

              <button className='bg-primary2 flex items-center justify-center w-5 h-5 rounded-full' >
                  <Image
                      src={ require('../assets/icons/moreVert.png') }
                      alt='stacFx.com'
                      className='w-[18px]'
                  />
              </button>
          </div>

          {/* WHITE AREA WITH CONTENT */}
          <div className='w-full h-[50%] 2xl:h-[50%] bg-white z-10 pt-[8px] px-[16px] 2xl:py-[20px] flex flex-col 2xl:justify-between gap-2 2xl:gap-4' >
              
              {/* TITLE AND NAME OF INSTRUCTOR */}
              <div className='' >
                  <h3 className='text-[14px] 2xl:text-base text-black' >{data?.title}</h3>
                  <p className='text-greytxt text-[10px] 2xl:text-xs font-[100]' >{ data?.instructor }</p>
              </div>


              {/* DETAILS */}
              <div className='w-full flex items-center justify-between' >
                  <div className='flex items-center gap-1' >
                      <Image
                          src={require('../assets/icons/book.png')}
                          alt='stacfx.com'
                          className='w-[14px]'
                      />
                      <p className='text-[10px] 2xl:text-xs text-greytxt font-[100]'>12 Lessons</p>
                  </div>

                  <button className='hoverActive flex items-center gap-2 text-greytxt bg-primary p-[6px] rounded'>
                      <p className='text-[11px] 2xl:text-[13px] text-white' >Start Now</p>
                      <Image
                          src={require('../assets/icons/circleArrow.png')}
                          alt='stacfx.com'
                          className='w-5'
                      />
                  </button>
              </div>

          </div>
    </div>
  )
}

export default LatestCard;