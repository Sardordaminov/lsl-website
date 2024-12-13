import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/logo/Screenshot_2024-12-06_161718-removebg-preview.png'

const Navbar = () => {
    let [changelang, setChangelang] = useState('')
    return (
        <div className='navbar'>
            <div className="main-navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>Teachers</li>
                    <li>Courses</li>
                    <li>Branches</li>
                    <li>Achievements</li>
                </ul>
                <div className="multilang-btn">
                    <button>{changelang}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar