import React from 'react'
import backArrow from '../images/backArrow.png'

function BackButton() {
  return (
    <>
        <div>
            <div>
                <img src={backArrow} alt="arrow_symbol"/>
            </div>
            <div>
                <p>Back</p>
            </div>
        </div>
    </>
  )
}

export default BackButton