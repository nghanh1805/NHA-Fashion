import React, { useState } from 'react';

export default function Header() {
    const [active, setActive] = useState('Home'); 

    const handleClick = (item) => {
        setActive(item);  
    };  

    return (
        <div className='flex justify-between items-center py-4 px-6 border-b'>
            <div>
                <img
                    className="w-32"
                    src="https://preview.colorlib.com/theme/malefashion/img/logo.png.webp"
                    alt="Fashion Logo"
                />
            </div>
            
            <div>
                <ul className='flex space-x-8 text-lg'>
                    {['Home', 'Shop', 'Pages', 'Blog', 'Contacts'].map((item) => (
                        <li
                            key={item}
                            className={`relative cursor-pointer ${active === item ? 'text-red-500' : ''}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                            <div
                                className={`absolute left-0 right-0 h-[0.1rem] bg-red-500 mt-1 transition-all duration-300 ${
                                    active === item ? 'w-full' : 'w-0'
                                }`}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex space-x-6 items-center'>
                <a href='#'>
                    <i className="fas fa-search text-xl"></i>
                </a>
                <a href='#'>
                    <i className="far fa-heart text-xl"></i>
                </a>
                <a href='#'>
                    <i className="fas fa-shopping-cart text-xl"></i>
                </a>
                <span className="text-lg">$0.00</span>
            </div>
        </div>
    );
}
