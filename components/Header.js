import React, { useState, useEffect } from 'react';
import Image from 'next/image'
// import icons
import { HiMenuAlt4, HiOutlineX, HiOutlineShoppingCart } from 'react-icons/hi';
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { header } from "../pages/information";

export default function Header() {
    // mobile nav state
    const [mobileNav, setMobileNav] = useState(false);
    // header state
    const [isActive, setIsActive] = useState(false);


    // scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
        });
    });

    const { image } = header;

    return (
        <header
            className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'text-white lg:top-[10px]'
                } py-6 lg:py-4 fixed w-full transition-all z-10`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                {/* logo */}
                <a href='#' data-aos='fade-down' data-aos-delay='1000'>
                    {/* <img src={logo} alt='' /> */}
                    <Image
                        className="relative"
                        src={image}
                        alt="Next.js Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
                {/* nav - initially hidden - show on desktop mode */}
                <div
                    className='hidden lg:flex'
                    data-aos='fade-down'
                    data-aos-delay='1200'
                >
                    <Nav />
                </div>
                {/* cta button - initially hidden - show on desktop mode */}

                {/* mobile nav trigger btn - hidden on desktop */}
                <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
                    {mobileNav ? (
                        <HiOutlineX className='text-3xl text-black' />
                    ) : (
                        <HiMenuAlt4 className='text-3xl text-black' />
                    )}
                </button>
                {/* mobile nav - hidden on desktop */}
                <div
                    className={`${mobileNav ? 'left-0' : '-left-full'
                        }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
                >
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

