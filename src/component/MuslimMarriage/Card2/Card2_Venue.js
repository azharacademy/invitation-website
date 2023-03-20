import React from 'react'
import cx from 'classnames'
import styles from '../Card2/Card2_Venue.module.scss'
function Card2_Venue() {
    return (
        <>
            <div className={styles.venue}>
                <p className={styles.timing}>06:00 PM Onwards</p>
                <p>Venue</p>
                <hr />
                <hr />
            </div>
        </>
    )
}

export default Card2_Venue