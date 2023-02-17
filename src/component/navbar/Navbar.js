import React from 'react'
import "./Navbar.css"
import img1 from '../images/burgurbtn.png.png'
import img2 from '../images/Vector.png'

function Navbar() {
    return (
        <div >
            <div>
                <div className='burgur_btn'>
                    <img src={img1} alt='' />
                    <h3>Invitation Plane</h3>
                </div>

                <div className='input_search'>
                    <img src={img2} alt='' className='input_img' />
                    <input type='search' className='inputs' placeholder='Search' />
                </div>
            </div>
            <div className='a_tag'>
                <a href='!' style={{textDecoration: 'none'}}>Wedding</a>
                <a href='!' style={{textDecoration: 'none'}}>Birthday</a>
                <a href='!' style={{textDecoration: 'none'}}>Festivals</a>
                <a href='!' style={{textDecoration: 'none'}}>opening ceremony</a>
            </div>
        </div>
    )
}

export default Navbar
