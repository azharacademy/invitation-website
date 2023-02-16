import React from 'react'
import img1 from '../images/Ellipse 2.png'
import img2 from '../images/logo_google.png'
import img3 from '../images/logo_facebook.png'
import "./SingUp.css"

function SingUp() {
    return (
        <div className='mai_div'>
                <div>
            <div className='img_div'>
                <img src={img1} alt="" />
            </div>

            <h3 className='text_area'>Invitation Planet</h3>

            <div className='btn'>
                <button className='button-singup'>Sing Up</button>
                <button className='button-login'>Login</button>
            </div>
            </div>
            <div className='inputs'>
                <input type='text' placeholder='Name'  className='input-items'/>
                <input type='email' placeholder='Email' className='input-items'/>
                <input type='password' placeholder='password'className='input-items' />
            </div>

            <div className='sing_btn'>
                <button>Sing Up</button>
            </div>

            <div className='line_text'>
                <hr /><span>OR</span><hr />
            </div>

            <div className='btn_icons'>
                    <button className='google_btn'><img src={img2} alt=''  style={{    marginRight: "14px"}}/><span>Sing in With Google</span></button>
               
                    <button className='facebook_btn'><img src={img3} alt=''  style={{    marginRight: "14px"}}/>Sing in With Facebook</button>
                

            </div>
        </div>
    )
}

export default SingUp
