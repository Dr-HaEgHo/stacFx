'use client'
import { dropDownProps, emailInputProps, emailInputPropsFade, pwInputProps, searchInputProps } from '@/types/types'
import { ArrowDown2, ArrowUp2, Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import React, { FC, useReducer, useRef, useState } from 'react'

const Input: FC<emailInputProps> = (props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <input onChange={handleInputChange} type="email" className='inputs' placeholder={props.placeholder && props.placeholder} />
        </div>
    )
}
export default Input;


export const InputFade: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            <label className='labelsFade'>{props.label && props.label}</label>
            <input type={props?.type} disabled={props?.isDisabled} className='inputsfade' placeholder={props.placeholder && props.placeholder} />
        </div>
    )
}


export const PasswordInput: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value)
    }


    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input className='inputs  ' type={isOpen === true ? "text" : "password"} onChange={handleInputChange} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
        </div>
    )
}

export const PasswordInputFade: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input className='inputsfade  ' type={isOpen === true ? "text" : "password"} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
        </div>
    )
}

export const SearchInputFade: FC<searchInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <div className='password-input' >
                <input className='inputsfade min-w-[400px] 2xl:min-w-[460px] ' type='text' placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[20px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    <div className='w-5 h-5' >
                        <Image
                            src={require('../assets/icons/search.png')}
                            alt='stacfx.com'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DropDown: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input className='inputs  ' type={isOpen === true ? "text" : "password"} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
        </div>
    )
}

export const DropDownFade: FC<dropDownProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue]: [value: string, setValue: any] = useState('')

    const pRef = useRef<HTMLParagraphElement>(null)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    const handleChange = () => {

    }

    const handleDropItem = (name: string | undefined) => {
        setValue(name);
        setIsOpen(prev => prev = !prev);
    }


    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input onChange={handleChange} value={value} className='inputsfade  ' type={props?.type} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<ArrowUp2 variant="Bold" size="20" />) : (<ArrowDown2 variant="Bold" size="20" />)
                    }
                </div>


                <div style={{
                    height: isOpen === true ? 150 : 0
                }} className='transition duration-[1000ms] w-full rounded-md bg-white shadow absolute z-10 top-[120%] slim-scroll' >
                    {
                        props?.data.map((item:any) => (
                            <p ref={pRef} onClick={() => handleDropItem(item.name)} className='transition duration-200 cursor-pointer p-2 text-[11px] 2xl:text-xs hover:bg-sidebarTxtHover active:bg-sidebarTxtActive' >{item.name}</p>
                        ))
                    }

                    <div className='w-full h-[2rem]' />
                </div>
            </div>
        </div>
    )
}