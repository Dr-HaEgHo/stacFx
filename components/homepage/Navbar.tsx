import Image from 'next/image';
import React from 'react'

const links = [
    { id: 1, title: "About", route: "#about", },
    { id: 2, title: "Coaching", route: "#coaching", },
    { id: 3, title: "Courses", route: "#courses", },
    { id: 4, title: "Trading", route: "#trading", },
    { id: 5, title: "Contact", route: "#contact", },
]

const Navbar = () => {



    return (
        <div className='w-full bg-white flex items-center justify-between py-4 z-50' >

            {/* LOGO */}
            <a href='/' className='w-[123px]' >
                <Image
                    src={require('../../assets/images/logoblack.png')}
                    alt='stacfx.com'
                    className='w-full'
                />
            </a>    


            {/* NAV */}
            <div className='flex' >
                <ul className='flex items-center gap-[64px]' >
                    {
                        links && links.map(link => (
                            <a key={link?.id} href={link?.route}><li className='text-sm 2xl:text-base text-headDesc' >{link?.title}</li></a>
                        ))
                    }
                </ul>
            </div>
            <button className='buttons-2 flex items-center gap-1' >
                <p className='text-xs 2xl:text-sm text-white' >Get Started</p>
                <Image
                    src={require('../../assets/icons/circleArrow.png')}
                    alt='stacfx.com'
                    className='w-[18px]'
                />
            </button>

        </div>
    )
}

export default Navbar;