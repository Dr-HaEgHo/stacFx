import React from 'react'
import { InputFade } from '../Input';
import Image from 'next/image';

const Profile = () => {
  return (
      <div className='w-full' >
          
          {/* TOP  */}
          <div className='w-full' >
              <h3 className='text-lg 2xl:text-xl text-headDesc ' >Profile</h3>
          </div>


          {/* PROFILE DIV */}
          <div className='w-full flex flex-col items-center' >

              {/* PROFILE PICTURE */}
              <div className='flex flex-col items-center my-[48px] ' >
                  {/* IMAGE */}
                  <div className='relative w-[70px] h-[70px] mb-6 2xl:mb-8' >
                      <div className='w-full h-full rounded-full overflow-hidden' >
                          <Image
                              src={require('../../assets/images/avatar2.png')}
                              alt='stacfx.com'
                              className='w-full'
                          />
                      </div>
                      <div className='w-[24px] h-[24px] rounded-full flex items-center justify-center bg-primary2 absolute bottom-0 right-0 cursor-pointer'  >
                          <Image
                              src={require('../../assets/icons/edit.png')}
                              alt='stacfx.com'
                              className="w-[18px]"
                          />
                      </div>
                  </div>


                  {/* USER DETAILS TEXT */}
                  <div className='flex flex-col items-center gap-1' >
                      <h4 className='text-[20px] 2xl:text-[24px] text-headDesc' >Kenny Michael</h4>
                      <p className='text-[11px] 2xl:text-[13px] text-greytxt' >Joined November 2023</p>
                  </div>

              </div>


             
              {/* PROFILE FORM */}
              <div className='w-[360px]'>
                  <form className='w-full flex flex-col gap-4 ' >
                      <InputFade
                          label='First Name'
                          placeholder="e.g Khenny"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='Last Name'
                          placeholder="e.g Michael"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='Username'
                          placeholder="KenDynamite001"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='Email'
                          placeholder="KKmichaellll@gmail.com"
                          type='email'
                          isDisabled={true}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='Phone Number'
                          placeholder="09137278220"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <button className='buttons' >
                          <p className='text-[13px] 2xl:text-[15px]'>Update Profile</p>
                      </button>
                  </form>
              </div>
          </div>

      </div>
  )
}

export default Profile;