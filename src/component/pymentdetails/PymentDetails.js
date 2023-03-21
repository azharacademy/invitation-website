import React from 'react'
import img from '../images/pymtarrow.png'
import img2 from '../images/rupya.png'
import img3 from '../images/googlepy.png'
import img4 from '../images/pybackarrow.png'
import img5 from '../images/netbanking.png'
import img6 from '../images/credit.png'
import './PymentDetails.scss'

function PymentDetails() {
    return (
        <>
            <div className='pym-div'>
                <img src={img} alt='!' />
                <h3>Payment Details</h3>
            </div>
            <div className='pay-counter'>
                <h4>Pay:<span><img src={img2} alt='!' /></span> 100</h4>
            </div>
            <div className='pay-option'>
                <h3>Payment Options</h3>
                <div className='google-pay'>
                    <img src={img3} alt='' className='google-image' />
                    <h4>Google pay</h4>
                    <div className='image-div'>
                        <img src={img4} alt='' />
                    </div>
                </div>
                <span ><hr className='line' /></span>
                <div className='google-pay'>
                    <img src={img5} alt='' className='google-image' />
                    <h4>Net Banking</h4>
                    <div className='image-div'>
                        <img src={img4} alt='' />
                    </div>
                </div>
                <span><hr className='line' /></span>
                <div className='google-pay'>
                    <img src={img6} alt='' className='google-image'/>
                    <h4>Credit/Debit Card</h4>
                    <div className='image-div'>
                        <img src={img4} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PymentDetails
