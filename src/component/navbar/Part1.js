import React, { useState } from 'react'
import img1 from '../images/burgurbtn.png'
import img2 from '../images/Vector.png'
import "./Navbar.css"
import SideBar from '../sidebar/SideBar'
function Part1() {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <>
            <div>
                <div className='burgur_btn'>
                    <img src={img1} alt='' onClick={() => { !navOpen ? setNavOpen(true) : setNavOpen(false) }} />
                    <h3>Invitation Plane</h3>
                </div>
                {navOpen ? <SideBar /> : ""}
                <div className='search_section'>
                    <div className='input_search'>
                        <button className='search_button'><img src={img2} alt='' className='input_img' /></button>
                        <input type='search' className='inputs' placeholder='Search' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part1