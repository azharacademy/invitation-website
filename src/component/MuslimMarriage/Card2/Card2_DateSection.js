import React from 'react'
import cx from 'classnames'
import styles from './card2.module.scss'

import img1 from './card2Images/img1.png'
import img4 from './card2Images/img4.png'
function Card2_DateSection() {
    return (
        <>
            <div className={styles.line1}>
                <img src={img4} alt="" />
            </div>

            <div className={styles.bottomInfo}>
                <p>Sunday</p>
                <div className={styles.img1}>
                    <img src={img1} alt="" />
                    <p>23</p>
                </div>
                <p>March</p>
            </div>


            <div className={styles.line2}>
                <img src={img4} alt="" />
            </div>

        </>
    )
}

export default Card2_DateSection