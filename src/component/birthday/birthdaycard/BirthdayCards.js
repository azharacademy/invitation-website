import React from 'react'
import styles from '../Birthday.module.scss'
import BabyBoy from './BabyBoy'
import BabyGirl from './BabyGirl'
import Mens from './Mens'
import Womens from './Womens'
function BirthdayCard() {
    return (
        <>
            <div className={styles.weddingCards}>
                <div className={styles.mainDiv}>
                    <div className={styles.WeddingCardsMain} >
                        <BabyBoy />
                        <BabyGirl />
                        <Mens />
                        <Womens />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BirthdayCard