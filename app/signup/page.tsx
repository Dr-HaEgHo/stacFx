'use client'
import ImageSlider from '@/components/ImageSlider'
import Input, { InputFade, PasswordInput, PasswordInputFade } from '@/components/Input'
import Loader from '@/components/CardLoader'
// import { authenticateAdminUser } from '@/store/auth/authActions'
// import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function Signup() {

    const router = useRouter()
    // const dispatch = useAppDispatch()
    // const isLoading = useAppSelector(state => state.auth.loading)
    // const loginSuccess = useAppSelector(state => state.auth.loginSuccess)


    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true)
    const [email, setEmail]= useState<string>("");
    const [loading, setLoading]= useState<boolean>(false)
    const [password, setPassword]= useState<string>("");


    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);


    const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        router.push('/dashboard/onboarding')
        // dispatch(authenticateAdminUser({
        //     email: email,
        //     password: password
        // }))
        e.preventDefault();
    }

    // EMAIL AND PASSWORD FIELDS VALIDATION
    useEffect(() => {
        console.log(isValidEmail, "Email Valid");

        if (
            email !== "" &&
            isValidEmail !== false &&
            password !== ""
        ) {
            setFormButtonDisabled(false)
        } else {
            setFormButtonDisabled(true)
        }

    }, [email, isValidEmail, password])

    // useEffect(() => {
    //     if (loginSuccess === true) {
    //         router.push('/dashboard')
    //     }
    // }, [loginSuccess])


    // useEffect(() => {
    //     if (isLoading === true) {
    //         setLoading(true)
    //     } else {
    //         setLoading(false)
    //     }
    // }, [isLoading])

    return (
        <main className="w-full h-screen bg-primary flex items-center ">


            <div className="w-1/2 h-full bg-primary1 overflow-hidden relative ">

                <div className=' z-10 pointer-events-none absolute w-full h-full bg-gradient-to-t from-primary2 to-transparent top-0 right-0 p-8 flex flex-col justify-between' >
                    {/* LOGO */}
                    <div className='w-[120px]' >
                        <Image
                            src={require('../../assets/images/fullLogo.png')}
                            alt='stacfx.com'
                            className='w-full'
                        />
                    </div>

                    <div className='w-full mb-[70px] 2xl:mb-[100px]  flex flex-col items-center ' >
                        <div className='w-1/2 mx-auto flex items-center justify-center gap-4 mb-2' >
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                            <div className='w-[12px] h-[12px] bg-white rounded-full ' />
                        </div>

                        <div className=''>
                            <h1 className='text-white text-center text-[28px] font-medium' >Real-time Simulations</h1>
                            <p className='text-lightgreentxt text-[15px] font-normal text-center'  > Practice Your Skills in a Risk-Free Environment with Our <br /> Virtual Trading Simulator</p>
                        </div>

                    </div>

                </div>
                <ImageSlider />
            </div>
            <div className="w-1/2 h-full bg-white scroll">
                <div className="w-full h-full flex flex-col items-center py-[5rem] justify-center gap-[3rem] ">


                    {/* FORM */}
                    <div className='w-[70%] 2xl:w-[80%] max-w-[592px] mx-auto p-[40px] 2xl:p-[60px] rounded ' >

                        <h2 className='text-[26px] 2xl:text-[32px] font-bold text-appBlack text-center' >Welcome Back!</h2>
                        <p className='text-xs 2xl:text-sm mb-[52px] 2xl:mb-[72px] font-normal text-input text-center' >Enter your details to login</p>
                        <form className='flex flex-col gap-4 2xl:gap-8' >
                            <InputFade setValue={setEmail} isDisabled={false} label="Email" type='email' placeholder='Please enter your email' />
                            <div className='mb-[40px]' >
                                <PasswordInputFade setValue={setPassword} label="Password" placeholder='Please enter your email' />
                                <p className='text-xs text-right mt-2 2xl:text-sm text-greentxt cursor-pointer hover:underline '>Forgot Password?</p>
                            </div>
                            <button onClick={submitHandler} type='submit' disabled={!formButtonDisabled} className="buttons font-[100] text-sm 2xl:text:base">{loading === true ? <Loader /> : 'Login'}</button>
                        </form>

                    </div>

                </div>
            </div>
        </main>
    )
}
