import React from 'react'
import cx from 'classnames'
import styles from './card1.module.scss'
import img1 from '../Card1/card1Images/img1.png'
import img2 from '../Card1/card1Images/img2.png'
import img3 from '../Card1/card1Images/img3.png'

function Card1() {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <div className={styles.class1}>
                        <div >
                            <img className={styles.mainBackgroundImage} src={img1} alt="" />
                        </div>
                        <div className={styles.circle}>
                            <div className={styles.cardNameDiv}>
                                <h3 className={styles.cardName}>NIKAH CEREMONY </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.whosWedding}>
                    <h4 className={styles.brideName}>SHAZIYA</h4>
                    <p>Weds</p>
                    <h4 className={styles.groomName}>MUBASHIR</h4>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.img2}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={styles.img3}>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1