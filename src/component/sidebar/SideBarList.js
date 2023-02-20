import React, { useState } from 'react'
import img2 from '../images/signInLogo.png'
import img3 from '../images/heartLogo.png'
import img4 from '../images/starLogo.png'
import img5 from '../images/shareLogo.png'
import img6 from '../images/logOutLogo.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faDuotone } from '@fortawesome/free-solid-svg-icons'
// import './SideBar.css'
function SideBarList() {
    // const [isActive, setIsActive] = useState(false)
    // const [activeColor, setActiveColor] = useState(false)
    // const onHandleClick = (event) => {
    //     document.classList.remove('sideBarActive');
    //     document.classList.add('sideBarActive');
    // }
    return (
        <>
            <div className='main_list'>
                <ul>
                    <li className="log_div"  >
                        <img src={img2} alt='' className='img_div' />
                        <a href='#' className='a_sidebar' >Sign up / Login</a>
                    </li>
                    <li className='favourtie-div' >
                        <img src={img3} alt='' className='img_div' />
                        {/* <FontAwesomeIcon icon={[faHeart]} /> */}
                        <a href='#' className='a_sidebar'>Favourite</a>
                    </li>
                    <li>
                        <img src={img4} alt='' className='img_div' />
                        <a href='#' className='a_sidebar'>Rate us</a>
                    </li>
                    <li >
                        <img src={img5} alt='' className='img_div' />
                        <a href='#' className='a_sidebar' >Share App</a>
                    </li >
                    <li>
                        <img src={img6} alt='' className='img_div' />
                        <a href='#' className='a_sidebar' >Logout</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default SideBarList