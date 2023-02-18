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
                <ul>
                    <li><a href='!' className='active'>Wedding</a> </li>
                    <li><a href='!' >Birthday</a> </li>
                    <li><a href='!'>Festivals</a> </li>
                    <li><a href='!' >opening ceremony</a> </li>
                </ul>
            </div>
            {/* <di className="image-container">
                <img className='backround-img' src={require("../images/Rectangle4.png")} alt="" />
                <img className='main-img' src={require("../images/image18.png")} alt="" />
                <img className='couple-img' src={require("../images/image19.png")} alt="" />
            </di> */}
        </div>
    )
}

export default Navbar
