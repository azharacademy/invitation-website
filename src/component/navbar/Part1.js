import React from 'react'
import img1 from '../images/burgurbtn.png'
import img2 from '../images/Vector.png'
import "./Navbar.css"
function Part1() {
    return (
        <>
            <div>
                <div className='burgur_btn'>
                    <img src={img1} alt='' />
                    <h3>Invitation Plane</h3>
                </div>
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