import React from 'react'
import cx from 'classnames'
import styles from '../OpeningCeremony.module.scss'
// import OpeningCeremony from '../OpeningCeremony'
function OpeningCeremonyCards() {
    return (
        <>
            <div className={styles.weddingCards}>
                <div className={styles.mainDiv}>
                    <div className={styles.WeddingCardsMain} >

                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Grand Opening Ceremony</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Vastu Shanti</p>
                        </div><div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Political Program</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Haldi Kumkum</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Tilgud</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>School Reunion</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default OpeningCeremonyCards