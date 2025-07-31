import { useState } from 'react';
import './header.scss'


function Header() {


    const [active, setActive] = useState(false);




    return (
        <div className='main-header'>
            <div className="header">
                <div className="logo text-transparent bg-clip-text bg-gradient-to-r from-[#2B384C] to-[#643434]">
                    ANRA Studio
                </div>

                <div className={`navbar ${active ? 'active' : ''}`}>
                    <ul>
                        <li>მთავარი</li>
                        <li>ჩვენს შესახებ</li>
                        <li>კურსის შესახებ</li>
                        <li className='menu__contact' >საკონტაქტო</li>
                    </ul>
                </div>

                <div className="burger" onClick={() => setActive(!active)}>
                    <div className={`line line-1 ${active ? 'active' : ''}`}></div>
                    <div className={`line line-2 ${active ? 'active' : ''}`}></div>
                    <div className={`line line-3 ${active ? 'active' : ''}`}></div>

                </div>

                <button className='pc z-[9999]  bg-gradient-to-r from-[#643434] to-[#2B384C] hover:opacity-90 transition-all duration-300' >საკონტაქტო</button>
            </div>
        </div>
    )
}


export default Header