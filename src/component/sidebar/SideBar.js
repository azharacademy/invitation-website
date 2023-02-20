import React from 'react'
import './SideBar.css'
import img1 from '../images/PlanetLogo.png.png'
import img2 from '../images/loginlogo.png.png'
import img3 from '../images/fvlogo.png'
import img4 from '../images/starlogo.png.png'
import img5 from '../images/shearlogo.png.png'
import img6 from '../images/logout.png.png'
import img7 from '../images/feedback.png'

function SideBar() {
    return (
        <div className='main'>
            <div >
                <img src={img1} alt='' className='main-div' />
            </div>
            <div className='heading'>
                <h3>Invitation Planet</h3>
            </div>
            <div className='main-button'>
                <div className='log-div'>
                    <img src={img2} alt='' className='img-div' />
                    <a href='!' className='a-sidebar' >Sign up / Login</a>
                </div>
                <div className='favourtie-div'>
                    <img src={img3} alt='' className='img-div' />
                    <a href='!' className='a-sidebar-fv'>Favourite</a>
                </div>
                <div>
                    <img src={img4} alt='' className='img-div' />
                    <a href='!' className='a-sidebar'>Rate us</a>
                </div>
                <div>
                    <img src={img5} alt='' className='img-div' />
                    <a href='!' className='a-sidebar' >Share App</a>
                </div>
                <div>
                    <img src={img6} alt='' className='img-div' />
                    <a href='!' className='a-sidebar' >Logout</a>
                </div>
            </div>
            <br /> <br /> <br />
            <div>
                <hr className='hr-div' />
            </div>
            <br /> <br /> <br />
            <div>
                <img src={img7} alt='' className='img-div' />
                <a href='!' className='a-sidebar'>Help & Feedback</a>
            </div>
        </div>
    )
}

export default SideBar
