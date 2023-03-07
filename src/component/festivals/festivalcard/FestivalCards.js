import React from 'react'
import cx from 'classnames'
import styles from '../Festival.module.scss'
function FestivalCard() {
    return (
        <>
            <div className={styles.weddingCards}>
                <div className={styles.mainDiv}>
                    <div className={styles.WeddingCardsMain} >

                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Makar Sankranti</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Pongal</p>
                        </div><div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Basant Panchami</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Holi</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Mewar</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Baisakhi</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Bihu</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Thrissur Pooram</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Budhha Jayanti</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Eid-ul-fitr</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Ratha Yatra</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Hemis</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Raksha Bandhan</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Independence day</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Onam</p>
                        </div>
                        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                            <p>Ganesh Chaturthi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FestivalCard