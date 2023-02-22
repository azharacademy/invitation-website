import React from 'react'
import MuslimWeddingCard from './MuslimWeddingCard'
import HinduWeddingCard from './HinduWeddingCard'
import styles from '../Wedding.module.scss'
import OtherCommunityWeddingCard from './OtherCommunityWeddingCard'
function WeddingCards() {
    return (
        <>
            <div className={styles.weddingCards}>
                <div className={styles.mainDiv}>
                    <div className={styles.WeddingCardsMain} >
                        <MuslimWeddingCard />
                        <HinduWeddingCard />
                    </div>
                </div>
                <OtherCommunityWeddingCard />
            </div>

        </>
    )
}

export default WeddingCards