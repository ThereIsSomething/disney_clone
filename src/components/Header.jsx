import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiUser } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { Link } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            path: '/',
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
            path: '/wishlist',
        },
        {
            name: 'ABOUT',
            icon: HiUser,
            path: '/about',
        }
    ];

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo" />
                {/* Desktop Menu */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        item.path ? (
                            <Link to={item.path} key={index}>
                                <HeaderItem name={item.name} Icon={item.icon} />
                            </Link>
                        ) : (
                            <HeaderItem key={index} name={item.name} Icon={item.icon} />
                        )
                    ))}
                </div>
                {/* Mobile Menu */}
                <div className='flex md:hidden gap-5'>
                    {menu.slice(0, 3).map((item, index) => (
                        item.path ? (
                            <Link to={item.path} key={index}>
                                <HeaderItem name={item.name} Icon={item.icon} />
                            </Link>
                        ) : (
                            <HeaderItem key={index} name={item.name} Icon={item.icon} />
                        )
                    ))}
                    <div className='relative' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className='absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-4'>
                                {menu.slice(3).map((item, index) => (
                                    item.path ? (
                                        <Link to={item.path} key={index}>
                                            <HeaderItem name={item.name} Icon={item.icon} />
                                        </Link>
                                    ) : (
                                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="User Avatar"
                className='w-[40px] rounded-full'
            />
        </div>
    );
}

export default Header;
