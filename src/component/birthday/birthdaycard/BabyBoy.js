import React from 'react'
import cx from 'classnames'
import styles from '../Birthday.module.scss'
function BabyBoy() {
    console.log(styles.muslimCard);
    return (
        <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
            <p>Baby Boy</p>
        </div>
    )
}

export default BabyBoy