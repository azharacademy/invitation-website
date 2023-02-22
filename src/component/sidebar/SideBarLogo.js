import React from 'react'
import img1 from '../images/m1.jpg'

import './SideBar.scss'
function SideBarLogo() {
    return (
        <div className='logoMainDiv'>
            <div className='logo_div'>
                <div className='sideBarLogo'>
                    <img src={img1} alt='' />
                </div>
            </div>
            <div className='sideBarLogoHeading'>
                <h3>Invitation Planet</h3>
            </div>
        </div>
    )
}

export default SideBarLogo