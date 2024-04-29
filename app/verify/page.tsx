'use client'
import Loader from "@/components/CardLoader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Verify = () => {

    const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true)
    const [loading, setLoading]: [loading: boolean, setLoading: Function] = useState<boolean>(false)

    return (
        <main className="w-full h-screen min-h-screen">
            <div className="w-full h-full bg-chatinput scroll">
                <div className="w-full h-full flex flex-col items-center py-[5rem] justify-center gap-[5rem]">

                    <Link href='/'>
                        <Image
                            src={require('../../assets/images/logoblack.png')}
                            alt='stacfx.com'
                            className='w-32'
                        />
                    </Link>

                {/* FORM */}
                <div className='w-[60%] 2xl:w-[80%] max-w-[592px] mx-auto p-[40px] bg-white rounded-xl 2xl:p-[60px] rounded' >

                    <h2 className='text-[26px] 2xl:text-[32px] font-bold text-appBlack text-center' >Please Verify Account</h2>
                    <p className='text-xs 2xl:text-sm mb-[52px] 2xl:mb-[72px] font-normal text-input text-center' >Enter the six digit code sent to your email <br />to verify your new Stac account</p>
                    

                    <button type='submit' disabled={!formButtonDisabled} className="buttons font-[100] text-sm 2xl:text:base">{loading === true ? <Loader /> : 'Verify & Continue'}</button>
                </div>

            </div>
        </div>
    </main>
    )
}

export default Verify;