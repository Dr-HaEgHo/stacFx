'use client'
import { InputFade } from '@/components/Input'
import { profileSchema } from '@/schemas'
import { useFormik } from 'formik'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);

    const onSubmit =  () => {

    }


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: {
      firstname: "Timothy",
      lastname: "Awogbuyi",
      username: "TeemTraderv1",
      phoneNumber: '08139347195',
      email: "Awogbuyitimothy@gmail.com",
    },
    validationSchema: profileSchema,
    onSubmit,
  });

  useEffect(() => {
    if (
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.username !== "" &&
      values.phoneNumber !== "" &&
      !errors.firstname &&
      !errors.lastname &&
      !errors.username &&
      !errors.phoneNumber &&
      !errors.email
    ) {
      setFormButtonDisabled(true);
    } else {
        setFormButtonDisabled(false);
    }
    
    console.log(values)
    
  }, [values, errors]);


    return (
        <div className='w-full h-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] ">

                {/* TOP WITH HEADER DESCRIPTIONS */}
                    <div className='flex flex-col items-start gap-[8px] 2xl:gap-3 pb-[26px] 2xl:pb-[34px]' >
                        <h3 className='text-lg 2xl:text-xl text-headDesc ' >Profile</h3>
                    </div>

                    {/* PROFILE DIV */}
                    <div className='w-full pl-[99px] flex items-center' >

                        {/* PROFILE PICTURE */}
                        <div className='flex flex-col items-center ' >
                            {/* IMAGE */}
                            <div className='relative w-[70px] h-[70px] mb-6 2xl:mb-8' >
                                <div className='w-full h-full rounded-full overflow-hidden' >
                                    <Image
                                        src={require('../../../assets/images/avatar2.png')}
                                        alt='stacfx.com'
                                        className='w-full'
                                    />
                                </div>
                                <div className='w-[24px] h-[24px] rounded-full flex items-center justify-center bg-primary2 absolute bottom-0 right-0 cursor-pointer'  >
                                    <Image
                                        src={require('../../../assets/icons/edit.png')}
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


                        {/* DIVIDER DIV */}

                        <div className='h-[253px] w-[1px] bg-profileDividerGray border-none outline-none mx-[99px] 2xl:mx-[99px]' />


                        {/* PROFILE FORM */}
                        <div className='w-[360px]'>
                            <form className='w-full flex flex-col gap-4 ' >
                                <InputFade
                                    id="firstname"
                                    value={values.firstname} 
                                    touched={touched.firstname}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.firstname}
                                    isDisabled={false} 
                                    label="First Name" 
                                    type='text' 
                                    placeholder={values.firstname} 
                                />
                                <InputFade
                                    id="lastname"
                                    value={values.lastname} 
                                    touched={touched.lastname}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.lastname}
                                    isDisabled={false} 
                                    label="Last Name" 
                                    type='text' 
                                    placeholder='' 
                                />
                                <InputFade
                                    id="username"
                                    value={values.username} 
                                    touched={touched.username}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.username}
                                    isDisabled={false} 
                                    label="Username" 
                                    type='text' 
                                    placeholder='' 
                                />
                                <InputFade
                                    id="email"
                                    value={values.email} 
                                    touched={touched.email}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.email}
                                    isDisabled={true} 
                                    label="Email" 
                                    type='email' 
                                    placeholder='' 
                                />
                                <InputFade
                                    id="phoneNumber"
                                    value={values.phoneNumber} 
                                    touched={touched.phoneNumber}
                                    blur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.phoneNumber}
                                    isDisabled={false} 
                                    label="Phone Number" 
                                    type='number' 
                                    placeholder='' 
                                />
                                <button disabled={!formButtonDisabled} className='buttons' >
                                    <p className='text-[13px] 2xl:text-[15px]'>Update Profile</p>
                                </button>
                            </form>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default page