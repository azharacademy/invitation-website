import React, { useState } from 'react'
import img1 from '../images/Ellipse_2.png'
import img2 from '../images/logo_google.png'
import img3 from '../images/logo_facebook.png'
import "./SingUp.css"

function SingUp() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            {isLogin ?
                <div className='mai_div'>
                    <div>
                        <div className='img_div-singup'>
                            <img src={img1} alt="" />
                        </div>
                        <h3 className='text_area'>Invitation Planet</h3>
                        <div className='btn_invitation'>
                            <button className='button-singup' onClick={() => setIsLogin(true)}>Sing Up</button>
                            <button className='button-login' onClick={() => setIsLogin(false)}>Login</button>
                        </div>
                    </div>
                    <div className='inputs'>
                        <input type='text' placeholder='Name' className='input-items' />
                        <input type='email' placeholder='Email' className='input-items' />
                        <input type='password' placeholder='Password' className='input-items' />
                    </div>
                    <div className='sing_btn'>
                        <button>Sing Up</button>
                    </div>
                    <div className='line_text'>
                        <div></div>
                        <div>OR</div>
                        <div></div>
                    </div>
                    <div className='btn_icons'>
                        <button className='google_btn'><img src={img2} alt='' style={{ marginRight: "14px" }} /><span>Sing in With Google</span></button>
                        <button className='facebook_btn'><img src={img3} alt='' style={{ marginRight: "14px" }} />Sing in With Facebook</button>
                    </div>
                </div>
                : <div>
                    <div className='mai_div'>
                        <div>
                            <div className='img_div-singup'>
                                <img src={img1} alt="" />
                            </div>
                            <h3 className='text_area'>Invitation Planet</h3>
                            <div className='btn_invitation'>
                                <button className='button-singup' style={{ backgroundColor: '#FFFFFF', color: '#64070A' }} onClick={() => setIsLogin(true)}>Sing Up</button>
                                <button className='button-login' style={{ backgroundColor: '#FF9A9E', color: '#FFFFFF' }} onClick={() => setIsLogin(false)}>Login</button>
                            </div>
                        </div>
                        <div className='inputs'>
                            <input type='email' placeholder='Email Id' className='input-items' />
                            <input type='password' placeholder='Password' className='input-items' />
                        </div>
                        <div className='sing_btn'>
                            <button>Login</button>
                        </div>
                        <div className='line_text'>
                            <div></div>
                            <div>OR</div>
                            <div></div>
                        </div>
                        <div className='btn_icons'>
                            <button className='google_btn'><img src={img2} alt='' style={{ marginRight: "14px" }} /><span>Sing in With Google</span></button>
                            <button className='facebook_btn'><img src={img3} alt='' style={{ marginRight: "14px" }} />Sing in With Facebook</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SingUp
