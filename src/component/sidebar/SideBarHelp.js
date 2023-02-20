import React from 'react'
import img7 from '../images/feedback.png'
function SideBarHelp() {
    return (
        <div>
            <div>
                <hr className='hr-div' />
            </div>

            <div className='helpFeedback'>
                <img src={img7} alt='' className='img_div' />
                <a href='!' className='a_sidebar'>Help & Feedback</a>
            </div>
        </div>
    )
}

export default SideBarHelp