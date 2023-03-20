import React from 'react'
import styles from './card2.module.scss'
import img3 from './card2Images/img3.png'
import img2 from './card2Images/img2.png'
import Card2_DateSection from './Card2_DateSection'
import Card2_Venue from './Card2_Venue'

function Card2() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.card2}>
                    <img src={img3} alt="" />
                </div>
                <div className={styles.bismillah}>
                    <img src={img2} alt="" />
                </div>
                <div className={styles.praiseDiv}>
                    <p className={styles.praise} >In the name of Allah,<br />
                        The most beneficient and The most Merciful</p>
                    <div className={styles.otherInfo} >
                        <h3 className={styles.surname} >Mr & Mrs.Surname</h3>
                        <p className={styles.honorOf}>Request the honor of your presence at the</p>
                        <h3 className={styles.nikahCeremony}>NIKAAH CEREMONY</h3>
                        <p className={styles.doughterOf}> Of his Daughter</p>
                        <h3 className={styles.brideName}>Fauzia</h3>
                        <p className={styles.d_o}>D/o Mr. & Mrs.Abc</p>
                        <p className={styles.with}>with</p>
                        <h3 className={styles.groomName}>Mubashir</h3>
                        <p className={styles.s_o}>S/o Mr. & Mrs.Zamindar</p>
                        <Card2_DateSection />
                        <Card2_Venue />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card2