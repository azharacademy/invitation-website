import React from 'react'
import './Weddingcard.css'

function WeddingCards() {
    return (
        <div>
            <div className='container'>
                <div className='row card-row-invite'>
                    <div style={{width:'50%'}}>
                        <div className="card card-container-in" >
                        <img src={require('../images/Rectangle14.png')} class="card-img-top" alt="..." />
                                <h5 className=' card-title-invation'>Muslim Marriage Invitation</h5>
                              
                        </div>
                    </div>
                    <div style={{width:'50%'}}>
                        <div class="card card-container-in" >
                        <img src={require('../images/Rectangle14.png')} class="card-img-top" alt="..." />
                                <h5 className=' card-title-invation' >Hindu Marriage Invitation</h5>
                       
                        </div>
                    </div>
                    <div style={{width:'100%' , marginTop:"15px"}}>
                        <div class="card card-container-in" >
                        <img src={require('../images/Rectangle14.png')} style={{height:"206px"}} class="card-img-top" alt="..." />
                                <h5 className="card-title card-title-invation">Other Community Marriage Invitation</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeddingCards
