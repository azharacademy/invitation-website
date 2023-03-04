import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './BirthAnouncementInvitation.module.scss'
import backArrow from '../../images/backArrow.png'
function BirthAnouncementInvitation() {
    const [designs,setDesigns] = useState([]);
    useEffect(() => {
        setDesigns(['Floral Design1', 'Floral Design2', 'Floral Design3'])
    }, [])
    return (
        <>
            <div>
                <div className={styles.navigationTop}>
                    <img src={backArrow} />
                    <h5>Birth Anouncement Invitation</h5>
                </div>
                <div className={styles.cards}>
                    {/* {designs.map((item)=>{

                    })} */}
                    <div></div>
                    {/* <div></div>
                    <div></div> */}
                </div>
                <div className={styles.advertisement} ></div>
            </div>
        </>
    )
}

export default BirthAnouncementInvitation