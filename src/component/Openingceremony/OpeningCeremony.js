import React from 'react'

function OpeningCeremony() {
    return (
        <div>
            <div className='container'>
                <div className='row card-row-invite'>
                    <div style={{ width: '50%' }}>
                        <div className="card card-container-in" >
                            <img src={require('../images/Rectangle14.png')} class="card-img-top" alt="..." />
                            <h5 className=' card-title-invation'>Grand Opening Ceremony</h5>

                        </div>
                    </div>
                    <div style={{ width: '50%' }}>
                        <div class="card card-container-in" >
                            <img src={require('../images/Rectangle14.png')} class="card-img-top" alt="..." />
                            <h5 className=' card-title-invation' >Vastu Shanti</h5>

                        </div>
                    </div>
                    <div style={{ width: '50%', marginTop: "15px" }}>
                        <div class="card card-container-in" >
                            <img src={require('../images/Rectangle14.png')} style={{ height: "206px" }} class="card-img-top" alt="..." />
                            <h5 className="card-title card-title-invation">Political Program</h5>
                        </div>
                    </div>
                    <div style={{ width: '50%', marginTop: "15px" }}>
                        <div class="card card-container-in" >
                            <img src={require('../images/Rectangle14.png')} style={{ height: "206px" }} class="card-img-top" alt="..." />
                            <h5 className="card-title card-title-invation">Haldi Kumkum</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OpeningCeremony
